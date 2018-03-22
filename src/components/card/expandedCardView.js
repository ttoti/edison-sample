import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import FontAwesome from 'react-fontawesome';

class ExpandedCardView extends Component {
  render() {
    var type = this.props.itemData["@type"];
    var itemData = this.props.itemData;
    var section = null;
    if(type.indexOf("Reservation") !== -1){
      if(type === "LodgingReservation"){
        section = (
          <div>
            <div>{"Address: " + itemData.reservationFor["address"]}</div>
            <div style={{paddingTop: "10px", paddingBottom: "15px"}}><a href={itemData.reservationStatus}>Status</a></div>
          </div>
        );
      }else if(type === "FoodEstablishmentReservation"){
        section = (
          <div>
            <div>
              <div className="section-item"></div>
              <div className="grid-rows">
                <div>Reservation: {itemData.reservationId}</div>
                <div>Address: {itemData.reservationFor.address}</div>
              </div>
            </div>
          </div>
        );
      }else{
        //Rental
        var address;
        if(itemData.dropoffLocation.address === itemData.pickupLocation.address){
          address = "Same as pick-up location";
        }else{
          address = itemData.pickupLocation.address;
        }
        section = (
          <div>
            <div>
              <div className="section-item"></div>
              <div className="grid-rows">
                <div>Reservation: {itemData.reservationId}</div>
                <div>
                  Drop-off location:
                  {address}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }else{
      if(type === "Order"){
        //Orders
        var orderedItems = itemData.acceptedOffer.map((item, index) => {
          return (<div key={index}>
            {"Price: "+ item["price"] + " "}
            {item["eligibleQuantity"]["value"] + "x "}
            {item["itemOffered"]["name"].substring(0, 35) + "..."}
            <img src={item["itemOffered"]["image"]} alt={item["itemOffered"]["name"]}/>
          </div>);
        });
        section = (
          <div>
            <div>
              <div className="section-item"></div>
              <div className="grid-rows">
                {orderedItems}
              </div>
            </div>
          </div>
        );
      }else{
        //Delivery
        orderedItems = itemData.partOfOrder.acceptedOffer.map((item, index) => {
          return ( <div key={index}>
              {"Price: "+ item["price"] + " "}
              {item["eligibleQuantity"]["value"] + "x "}
              {item["itemOffered"]["name"]}
              <img src={item["itemOffered"]["image"]} alt={item["itemOffered"]["name"]}/>
            </div>);
        });
        section = (
          <div>
            <div>{"Shipping via: " + itemData.provider['name'] + "\n"}</div>
            <div>{"Order: " + itemData.partOfOrder["orderNumber"]} </div>
            <div className="expanded-card-container">
              <div className="section-item"></div>
              <div className="grid-rows">
                {orderedItems}
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div style={{paddingBottom: "15px"}}>
        <Collapsible trigger={<FontAwesome name={"angle-down"} style={{width: '100%', textAlign: 'center', color: "black"}}/>} transitionTime={150}>
          <div style={{textAlign: "center"}}><h5>More details</h5></div>
          <div className="expanded-card-container">
          <div className="grid-item section-item"></div>
          <div className="grid-item section-item">{section}</div>
          </div>
        </Collapsible>
      </div>
    );
  }
}
export default ExpandedCardView;
