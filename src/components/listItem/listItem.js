import React, { Component } from 'react';

import CardContainer from '../card/cardContainer';
import ExpandedCardView from '../card/expandedCardView';

import './listItem.css';

class ListItem extends Component {
  render() {
    var itemData = this.props.itemData;

    if(itemData["@type"].indexOf("Reservation") !== -1){
      // console.log(itemData);
    }else{
      // console.log("other" , itemData);
    }
    return (
      <div className="list-item">
        <li>
        <CardContainer itemData={this.props.itemData}/>
        <ExpandedCardView itemData={this.props.itemData}/>
        </li>
      </div>
    );
  }
}
export default ListItem;
