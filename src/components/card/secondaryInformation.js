import React, { Component } from 'react';
import './card.css';

class SecondaryInformation extends Component {
  render() {
    var type = this.props.itemData["@type"];

    var lineOne = null, lineTwo = null, lineThree = null, lineFour = null;
    if(type.indexOf("Reservation") !== -1){
      lineThree = <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURI(this.props.itemData.reservationFor['address'])} target="blank" style={{fontWeight: "bold"}}>Locate it</a>;
      if(type === "LodgingReservation"){
        console.log(this.props.itemData);
        lineOne = "Reservation: " + this.props.itemData["reservationId"];
        lineFour = this.props.itemData.reservationFor["telephone"];

      }else if(type === "FoodEstablishmentReservation"){
        lineFour = this.props.itemData.reservationFor["telephone"];
      }else{
        //Rental
        lineOne = "Under: " + this.props.itemData.underName['name'];
        lineThree = <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURI(this.props.itemData.pickupLocation['address'])} target="blank" style={{fontWeight: "bold"}}>Locate it</a>;
        lineFour = this.props.itemData.reservationFor["name"];
      }
    }else{
      if(type === "Order"){
        lineTwo = "Invoice: " + this.props.itemData['orderNumber'];
        lineThree = this.props.itemData['x-price'];
      }else{
        lineOne = "Tracking:"
        lineTwo = this.props.itemData['trackingNumber'];
        lineThree = <a href={this.props.itemData['trackingUrl']} target="blank" style={{fontWeight: "bold"}}>Track it</a>
      }
    }
    return (
      <div className="grid-rows">
        <div className="row-item">{lineOne}</div>
        <div className="row-item">{lineTwo}</div>
        <div className="row-item">{lineThree}</div>
        <div className="row-item">{lineFour}</div>
      </div>
    );
  }
}
export default SecondaryInformation;
