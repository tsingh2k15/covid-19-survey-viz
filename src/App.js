// default

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

// sample 1

import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
// import {XYPlot, HeatmapSeries, XAxis, YAxis, Hint} from 're
import {Sunburst} from 'react-vis';
// class App extends Component {
//   render() {
//     const data = [
//       {x: 0, y: 8},
//       {x: 1, y: 5},
//       {x: 2, y: 4},
//       {x: 3, y: 9},
//       {x: 4, y: 1},
//       {x: 5, y: 7},
//       {x: 6, y: 6},
//       {x: 7, y: 3},
//       {x: 8, y: 2},
//       {x: 9, y: 0}
//     ];
//     return (
//       <div className="App">
//         <XYPlot height={300} width={300}>
//           <LineSeries data={data} />
//         </XYPlot>
//       </div>
//     );
//   }
// }
//

// heat map

// class App extends Component {
//   state = {
//     value: false
//   };
//   render() {
//     const {value} = this.state;
//     return (
//       <XYPlot width={300} height={300}>
//         <XAxis />
//         <YAxis />
//         <HeatmapSeries
//           className="heatmap-series-example"
//           onValueMouseOver={v => this.setState({value: v})}
//           onSeriesMouseOut={v => this.setState({value: false})}
//           data={[
//             {x: 1, y: 0, color: 10},
//             {x: 1, y: 5, color: 10},
//             {x: 1, y: 10, color: 6},
//             {x: 1, y: 15, color: 7},
//             {x: 2, y: 0, color: 12},
//             {x: 2, y: 5, color: 2},
//             {x: 2, y: 10, color: 1},
//             {x: 2, y: 15, color: 12},
//             {x: 3, y: 0, color: 9},
//             {x: 3, y: 5, color: 2},
//             {x: 3, y: 10, color: 6},
//             {x: 3, y: 15, color: 12}
//           ]}
//         />
//         {value !== false && <Hint value={value} />}
//       </XYPlot>
//     );
//   }
// }

// sun burst

function randomChildLeaf(numYes, color) {
  return {
    size: Math.random() * 1000,
    color: color,
    name: numYes
  };
}

function randomLeaf(age_range, color) {
  return {
    size: Math.random() * 1000,
    color: color,
    name: age_range
  };
}

function getNumYes(age_range) {
  if(age_range === "0-12") {
    return 200
  } else if(age_range === "13-19") {
    return 250
  } else if(age_range === "20-39") {
    return 300
  } else if(age_range === "40-59") {
    return 350
  } else if(age_range === "60-79") {
    return 400
  } else if(age_range === "80+") {
    return 450
  }
}
function updateData() {
  const totalLeaves = 5;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    const numYes = getNumYes(AGE_RANGE[i])
    const leaf = randomLeaf(AGE_RANGE[i], DIVERGING_COLOR_SCALE[i]);
    leaf.children = [...new Array(1)].map(() => randomChildLeaf(numYes, DIVERGING_COLOR_SCALE[i]));
    leaves.push(leaf);
  }
  return {
    title: 'Response per age range',
    color: 1,
    children: leaves
  };
}

const DIVERGING_COLOR_SCALE = ['#FFFF00', '#FF8C00', '#C71585', '#FA8072', '#FF0000', "#8B0000"];

const AGE_RANGE = ["0-12", "13-19", "20-39", "40-59", "60-79", "80+"]

class App extends Component {
  state = {
    data: updateData(),
    hovering: false
  };
  render() {
    const {data, hovering} = this.state;
    return (
      <div className="animated-sunburst-example-wrapper">

        <Sunburst
          animation={{damping: 20, stiffness: 300}}
          data={data}
          colorType={'category'}
          colorRange={DIVERGING_COLOR_SCALE}
          style={{stroke: '#fff'}}
          onValueMouseOver={() => this.setState({hovering: true})}
          onValueMouseOut={() => this.setState({hovering: false})}
          height={300}
          width={350}
          getLabel={d => d.name}
          margin={{top: 200, bottom: 200, left: 200, right: 200}}
        />
      </div>
    );
  }
}

export default App;



