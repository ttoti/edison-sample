import React, { Component } from 'react';
import './card.css';

class SecondaryInformation extends Component {
  render() {
    var type = this.props.itemData["@type"];

    var lineOne = null, lineTwo = null, lineThree = null, lineFour = null;
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){
        lineOne = "Reservation: " + this.props.itemData["reservationId"];
        lineThree = this.props.itemData.reservationFor["telephone"];
        lineFour = <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURI(this.props.itemData.reservationFor['address'])} target="blank" style={{fontWeight: "bold"}}>Locate it</a>;

      }else if(type === "FoodEstablishmentReservation"){
        lineThree = this.props.itemData.reservationFor["telephone"];
        lineFour = <a href={this.props.itemData.provider["url"]} target="blank" style={{fontWeight: "bold"}}>Explore it</a>;
      }else{
        //Rental
        lineOne = "Under: " + this.props.itemData.underName['name'];
        lineThree = this.props.itemData.reservationFor["name"].substring(0, 20);
        lineFour = <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURI(this.props.itemData.pickupLocation['address'])} target="blank" style={{fontWeight: "bold"}}>Locate it</a>;
      }
    }else{
      if(type === "Order"){
        lineTwo = "Invoice: " + this.props.itemData['orderNumber'];
        lineThree = this.props.itemData['x-price'];
      }else{
        lineOne = "Tracking:"
        lineTwo = this.props.itemData['trackingNumber'];
        lineFour = <a href={this.props.itemData['trackingUrl']} target="blank" style={{fontWeight: "bold"}}>Track it</a>
      }
    }
    return (
      <div className="grid-rows">
        <div className="row-item">{lineOne}</div>
        <div className="row-item">{lineTwo}</div>
        <div className="row-item">{lineThree}</div>
        <div className="row-item" style={{paddingTop: "20px"}}>{lineFour}</div>
      </div>
    );
  }
}
export default SecondaryInformation;
