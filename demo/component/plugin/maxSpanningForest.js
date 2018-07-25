import React from 'react';
import { Graph, G6 } from 'react-g6';
require('@antv/g6/build/plugin.template.maxSpanningForest');

const Plugin = G6.Plugins["template.maxSpanningForest"];
const plugin = new Plugin();

export default class MaxSpanningForest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [{
          id: 0,
          weight: 42.194703980779714,
          label: 'name0'
        }, {
          id: 1,
          weight: 72.86640536738712,
          label: 'name1'
        }, {
          id: 2,
          weight: 82.29983433131834,
          label: 'name2'
        }, {
          id: 3,
          weight: 23.204885400175424,
          label: 'name3'
        }, {
          id: 4,
          weight: 100.84964997048472,
          label: 'name4'
        }, {
          id: 5,
          weight: 72.90971413062293,
          label: 'name5'
        }, {
          id: 6,
          weight: 15.029159176990348,
          label: 'name6'
        }, {
          id: 7,
          weight: 24.38308784826313,
          label: 'name7'
        }, {
          id: 8,
          weight: 78.00164088714241,
          label: 'name8'
        }, {
          id: 9,
          weight: 53.580641600279954,
          label: 'name9'
        }],
        edges: [{
          id: '1-6',
          source: 1,
          target: 6,
          weight: 89.69805016254719
        }, {
          id: '5-3',
          source: 5,
          target: 3,
          weight: 86.31397440928264
        }, {
          id: '0-5',
          source: 0,
          target: 5,
          weight: 76.94877138495532
        }, {
          id: '5-9',
          source: 5,
          target: 9,
          weight: 63.754902669930644
        }, {
          id: '2-7',
          source: 2,
          target: 7,
          weight: 4.449707271000913
        }, {
          id: '3-4',
          source: 3,
          target: 4,
          weight: 36.97483959651564
        }, {
          id: '9-3',
          source: 9,
          target: 3,
          weight: 50.354719513581635
        }, {
          id: '6-4',
          source: 6,
          target: 4,
          weight: 10.02660118138856
        }, {
          id: '8-3',
          source: 8,
          target: 3,
          weight: 13
        }, {
          id: '8-4',
          source: 8,
          target: 4,
          weight: 13
        }, {
          id: '2-1',
          source: 2,
          target: 1,
          weight: 13
        }, {
          id: '4-5',
          source: 4,
          target: 5,
          weight: 60
        }, {
          id: '4-8',
          source: 4,
          target: 8,
          weight: 63
        }, {
          id: '8-5',
          source: 8,
          target: 5,
          weight: 13
        }, {
          id: '9-2',
          source: 9,
          target: 2,
          weight: 13
        }, {
          id: '1-8',
          source: 1,
          target: 8,
          weight: 19.02660118138856
        }, {
          id: '4-2',
          source: 4,
          target: 2,
          weight: 50.02660118138856
        }]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-basic">
          <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} plugins={[plugin]}>
          </Graph>
        </div>
      </div>
    );
  }
}
