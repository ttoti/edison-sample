import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import FontAwesome from 'react-fontawesome';

class ExpandedCardView extends Component {
  render() {
    return (
      <div>
        <Collapsible trigger={<FontAwesome name={"angle-down"} style={{width: '100%', textAlign: 'center'}}/>} transitionTime={150}>
        <table>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
        </Collapsible>
      </div>
    );
  }
}
export default ExpandedCardView;
