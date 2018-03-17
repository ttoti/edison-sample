import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import FontAwesome from 'react-fontawesome';
import './listItem.css';

class ListItem extends Component {
  render() {
    var itemData = this.props.itemData;

    if(itemData["@type"].indexOf("Reservation") !== -1){
      console.log(itemData);
    }else{
      console.log("other" , itemData);
    }
    return (
      <div className="list-item">
        <li>
          <div className="card-container">
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
          </div>
          <Collapsible trigger={<FontAwesome name={"angle-down"}/>} transitionTime={150}>
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
        </li>
      </div>
    );
  }
}
export default ListItem;
