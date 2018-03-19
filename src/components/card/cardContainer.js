import React, { Component } from 'react';
import CardIcon from './cardIcon';

import KeyInformation from './keyInformation';
import SecondaryInformation from './secondaryInformation';
import './card.css';

class CardContainer extends Component {
  render() {
    return (
          <div className="card-container">
            <div className="grid-item"> <CardIcon type={this.props.itemData["@type"]}/> </div>
            <div className="grid-item"><KeyInformation itemData={this.props.itemData}/></div>
            <div className="grid-item"><SecondaryInformation itemData={this.props.itemData}/></div>
          </div>
    );
  }
}
export default CardContainer;
