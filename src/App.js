import React, {Component} from 'react';
import {Hint, Sunburst} from 'react-vis';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {EXTENDED_DISCRETE_COLOR_RANGE as colors} from '../node_modules/react-vis/dist/theme.js';

// const DATA = {
//   children: [
//     {
//       children: [
//         {bigness: 1, children: [], clr: colors[1], name: 'excellent'},
//         {bigness: 1, children: [], clr: colors[2], name: 'chart'}
//       ],
//       clr: colors[3]
//     },
//     {
//       bigness: 1,
//       children: [],
//       clr: colors[4],
//       name: 'cool',
//       labelStyle: {
//         fontSize: 15,
//         fontWeight: 'bold'
//       }
//     },
//     {bigness: 1, children: [], clr: colors[5], name: 'dogs'},
//     {bigness: 1, children: [], clr: colors[6], name: 'sunglasses'},
//     {
//       children: [
//         {bigness: 1, children: [], clr: colors[7], name: 'great'},
//         {bigness: 1, children: [], clr: colors[8], name: 'label'}
//       ],
//       clr: colors[9]
//     }
//   ]
// };

// TODO: convert CSV to JSON or Javascript
// TODO: convert JSON to Javascript
const DATA_CSV =
  {
    children: [
      {
        children: [
          {
            children: [
              {
                bigness: 1,
                name: 'Yes',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'London, UK',
            clr: colors[1]
          }
        ],
        bigness: 3,
        clr: colors[5],
        name: '0-12 years'
      },
      {
        children: [
          {
            children: [
              {
                bigness: 1,
                name: 'Yes',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Rome USA',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Philadelphia',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'London UK',
            clr: colors[1]
          }
        ],
        bigness: 3,
        clr: colors[5],
        name: '13-19 years'
      },
      {
        children: [
          {
            children: [
              {
                bigness: 1,
                name: 'Yes',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Orlando, Florida, USA',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'Yes',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Manchester, england',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness : 2,
            name: 'Sweden',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'London, U.K.',
            clr: colors[1]
          },
          {
            children: [
              {
                bigness: 1,
                name: 'Yes',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Detroit, Michigan',
            clr: colors[1]
          }
        ],
        bigness: 3,
        clr: colors[5],
        name: '20-39 years'
      },
      {
        children: [
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Philadelphia',
            clr: colors[1]
          }
        ],
        bigness: 3,
        clr: colors[5],
        name: '40-59 years'
      },
      {
        bigness: 3,
        children: [],
        clr: colors[5],
        name: '60-79 years'
      },
      {
        children: [
          {
            children: [
              {
                bigness: 1,
                name: 'No',
                clr: colors[2],
                children: []
              }
            ],
            bigness: 2,
            name: 'Chicago USA',
            clr: colors[1]
          }
        ],
        bigness: 3,
        clr: colors[5],
        name: '80+ years'
      }
    ]
  };

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};
const boxStyle = {height: '10px', width: '10px'};

function buildValue(hoveredCell) {
  const {radius, angle, angle0} = hoveredCell;
  const truedAngle = (angle + angle0) / 2;
  return {
    x: radius * Math.cos(truedAngle),
    y: radius * Math.sin(truedAngle)
  };
}

export default class SunburstWithTooltips extends React.Component {
  state = {
    hoveredCell: false
  };

  render() {
    const {hoveredCell} = this.state;
    return (
      <Sunburst
        data={DATA_CSV}
        style={{stroke: '#fff'}}
        // onValueMouseOver={v =>
        //   this.setState({hoveredCell: v.x && v.y ? v : false})
        // }
        // onValueMouseOut={v => this.setState({hoveredCell: false})}
        height={900}
        margin={{top: 50, bottom: 50, left: 50, right: 50}}
        getLabel={d => d.name}
        getSize={d => d.bigness}
        getColor={d => d.clr}
        width={950}
        padAngle={() => 0.02}
      >
        {hoveredCell ? (
          <Hint value={buildValue(hoveredCell)}>
            <div style={tipStyle}>
              <div style={{...boxStyle, background: hoveredCell.clr}}/>
              {hoveredCell.clr}
            </div>
          </Hint>
        ) : null}
      </Sunburst>
    );
  }
}



