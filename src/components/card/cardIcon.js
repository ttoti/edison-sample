import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import './card.css';

class CardIcon extends Component {
  render() {
    var icon = null;
    switch(this.props.type){
      case "LodgingReservation":
        icon = <FontAwesome name={"building"}/>
        break;
      case "RentalCarReservation":
        icon = <FontAwesome name={"car"}/>
        break;
      case "FoodEstablishmentReservation":
        icon = <FontAwesome name={"apple"}/>
        break;
      case "Order":
        icon = <FontAwesome name={"shopping-cart"}/>
        break;
      default:
        icon = <FontAwesome name={"envelope"}/>
        break;
    }
    return (
          <div>
            {icon}
          </div>
    );
  }
}
export default CardIcon;
