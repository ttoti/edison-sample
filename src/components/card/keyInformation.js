import React, { Component } from 'react';

import './card.css';

class KeyInformation extends Component {
  render() {
    console.log(this.props.itemData);
    return (
      <div className="grid-rows">
        <div className="row-item">1</div>
        <div className="row-item">2</div>
        <div className="row-item">3</div>
      </div>
    );
  }
}
export default KeyInformation;
