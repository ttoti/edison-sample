import React, { Component } from 'react';

import './card.css';

class KeyInformation extends Component {
  constructor(props){
    super(props);
    this.convertTime = this.convertTime.bind(this);
  }
  convertTime(stringDate){
    var time = new Date(stringDate);
    var hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    var am_pm = time.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

    time = hours + ":" + minutes + " " + am_pm;
    return time;
  }
  render() {

    var type = this.props.itemData["@type"];
    var lineOne = null, lineTwo = null, lineThree = null, lineFour = null;
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){
        var checkinTime = this.convertTime(this.props.itemData["checkinTime"]);
        var checkoutTime = this.convertTime(this.props.itemData["checkoutTime"]);

        lineOne = "Reservation at " + this.props.itemData.reservationFor["name"];
        lineThree = "Check in: On " + this.props.itemData["checkinTime"].substring(5, 10) + " - At " + checkinTime;
        lineFour = "Check out: On " + this.props.itemData["checkoutTime"].substring(5, 10)  + " -  At " + checkoutTime;

      }else if(type === "FoodEstablishmentReservation"){
        var reservTime = this.convertTime(this.props.itemData["startTime"]);

        lineOne = "Reservation for " + this.props.itemData["partySize"];
        lineTwo = "At the " + this.props.itemData.reservationFor['name'];
        lineFour = "On: " + this.props.itemData["startTime"].substring(5, 10) + " - At " + reservTime;

      }else{
        //Rental
        var pickupTime = this.convertTime(this.props.itemData["pickupTime"]);
        var dropoffTime = this.convertTime(this.props.itemData["dropoffTime"]);

        lineOne = "Car rental at " + this.props.itemData.provider.name;
        lineThree = "Pick up: On " + this.props.itemData["pickupTime"].substring(5, 10) + " - At " + pickupTime;
        lineFour = "Drop off: On " + this.props.itemData["dropoffTime"].substring(5, 10)  + " -  At " + dropoffTime;
      }
    }else{
      if(type === "Order"){
        lineTwo = "Order placed with " + this.props.itemData.seller['name'];
        lineFour = "On: " + this.props.itemData['orderDate'].substring(5, 10);
      }else{
        lineTwo = "Your order from " + this.props.itemData.partOfOrder.broker.name + " is on the way"
        lineFour = "Arriving: " + this.props.itemData['expectedArrivalUntil'].substring(5, 10);
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
export default KeyInformation;
