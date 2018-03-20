import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import './card.css';

class CardIcon extends Component {
  render() {
    var icon = null;
    switch(this.props.type){
      case "LodgingReservation":
        icon = <FontAwesome name={"building"} size={"2x"}/>
        break;
      case "RentalCarReservation":
        icon = <FontAwesome name={"car"} size={"2x"}/>
        break;
      case "FoodEstablishmentReservation":
        icon = <FontAwesome name={"apple"} size={"2x"}/>
        break;
      case "Order":
        icon = <FontAwesome name={"shopping-cart"} size={"2x"}/>
        break;
      default:
        icon = <FontAwesome name={"envelope"} size={"2x"}/>
        break;
    }
    return (
          <div className="circle-icon">
            {icon}
          </div>
    );
  }
}
export default CardIcon;
