import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

const getData = () =>{
  var Plotly = require('plotly.js-dist-min')
  var arr = []
  for(let i=0;i<10;i++){
    arr.push(Array(3).fill().map(()=>Math.random()))
  }
  
  Plotly.newPlot('chart',[{
    z:arr,
    type:'surface'
  }])
}

function App() {
  
  var data = getData()
  const type = 'scatter3d'
  return (
    <div className="App">
      {console.log(data)}
    </div>
  );
}

export default App;
