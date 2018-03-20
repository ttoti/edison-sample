import React, { Component } from 'react';
import './card.css';

class SecondaryInformation extends Component {
  constructor(props){
    super(props);
      this.state = {
        secondaryInformation: {}
      };
  }
  componentWillMount(){
    var type = this.props.itemData["@type"]

    //Set key information based on type
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){

      }else if(type === "FoodEstablishmentReservation"){

      }else{
        //Rental
      }
    }else{
      if(this.props.itemData["@type"] === "Order"){
        this.setState({
          secondaryInformation: {
            "price": this.props.itemData['x-price'],
            "orderNumber": this.props.itemData['orderNumber'],
          }
        });
      }else{
        this.setState({
          secondaryInformation: {
            "trackingUrl": this.props.itemData['trackingUrl'],
            "trackingNumber": this.props.itemData['trackingNumber'],
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
        lineTwo = "Invoice: " + this.state.secondaryInformation.orderNumber;
        lineThree = this.state.secondaryInformation.price;
      }else{
        lineThree = <a href={this.state.secondaryInformation.trackingUrl} target="blank" style={{fontWeight: "bold"}}>Track it</a>
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
