import React, { Component } from 'react';

import './card.css';

class KeyInformation extends Component {
  constructor(props){
    super(props);
      this.state = {
        keyInformation: {}
      };
  }
  componentWillMount(){
    var type = this.props.itemData["@type"];

    //Set key information based on type
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){
        this.setState({
          keyInformation: {

          }
        });
      }else if(type === "FoodEstablishmentReservation"){
        this.setState({
          keyInformation: {

          }
        });
      }else{
        //Rental
        this.setState({
          keyInformation: {

          }
        });
      }
    }else{
      if(type === "Order"){
        //Set key information for orders
        this.setState({
          keyInformation: {
            "orderNumber": this.props.itemData['orderNumber'],
            "orderDate": this.props.itemData['orderDate'],
            "seller": this.props.itemData.seller['name'],
          }
        });
      }else{
        //Set key information for delivery
        this.setState({
          keyInformation: {
            "trackingUrl": this.props.itemData['trackingUrl'],
            "trackingNumber": this.props.itemData['trackingNumber'],
            "expectedArrival": this.props.itemData['expectedArrivalUntil'],
            "itemName": this.props.itemData.partOfOrder.broker.name,
          }
        });
      }
    }
  }
  render() {
    var type = this.props.itemData["@type"];

    var lineOne = null, lineTwo = null, lineThree = null, lineFour = null;
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){

      }else if(type === "FoodEstablishmentReservation"){

      }else{
        //Rental

      }
    }else{
      if(type === "Order"){
        lineTwo = "Order placed with " + this.state.keyInformation.seller;
        lineFour = "On: " + this.state.keyInformation.orderDate.substring(5, 10);
      }else{
        lineTwo = "Your order from " + this.state.keyInformation.itemName + " is on the way"
        lineFour = "Arriving: " + this.state.keyInformation.expectedArrival.substring(5, 10);
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
