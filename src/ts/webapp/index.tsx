import * as React from 'react';
import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import * as Plot  from 'react-plotly.js';

export class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Plot
        data={
          [
            {
              x: [1, 2, 3],
              y: [4, 5, 6],
              z: [7, 8, 9],
              type: 'scatter3d',
              mode: 'markers',
            }
          ]
        }
      />
    );
  }
}
