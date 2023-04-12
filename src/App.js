import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

const getData = () =>{
  var Plotly = require('plotly.js-dist-min')
  var arr = []
  var z = [1,-1,1,-1,1,-1,1,-1,1,-1]
  var x = [1,23,4,34,56,4,67,56,8,76]
  var y = [-23,-3,-4,-5,-4,-6,-4,-7,-6,-10]
  var data = [{
    z:z,
    x:x,
    y:y,
    type:'surface'
  }]
  //console.log(arr)
  var url = 'https://innovation-netcdfs.s3.us-west-2.amazonaws.com/tmp_data_metadata.json'
  fetch(url)
  .then(response=>response.json())
  .then((data)=>{
    const lat = []
    const lon = []

    var divide_by = 500;
    var i = 0;
    for(i;i<data.length;i+=parseInt(data.length/divide_by)){
      lat.push(data[i].Latitude)
      lon.push(data[i].Longitude)
    }

    console.log("Lat: ", lat)
    console.log("Lon: ", lon)
    
    const grid_len = lat.length
    const zData = []
    var pointer = 0;
    console.log(`starting...data_length:${data.length}`)
    for(i=0;i<data.length;i+=parseInt(data.length/divide_by)){
      var a = Array.apply(null, Array(grid_len)).map(Number.prototype.valueOf,0);
      a[pointer] = data[i].Data
      pointer = pointer + 1
      zData.push(a)
    }
    console.log("Complete")
    console.log(zData)
    var data = [{
      z: zData,
      x: lat,
      y: lon,
      type: 'surface'
    }];
    console.log(data)
    var layout = {
      title: 'My Plot',
      autosize: false,  
      width: 1000,
      height: 1000,
      willReadFrequently:true
    };
    Plotly.newPlot('wassupman',data,layout)
  })
}



function App() {
  
  //var data = getData()
  const type = 'scatter3d'
  return (
    <div className="App" style={{display:'flex'}}>
      <div style={{width:'50%',backgroundColor:'red'}}>123</div>
      <div id="wassupman" style={{backgroundColor:'blue'}}>112{getData()}</div>
      
    </div>
  );
}

export default App;
