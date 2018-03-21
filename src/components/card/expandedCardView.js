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
                "wot"
              </div>
            </div>
          </div>
        );
      }else{
        //Rental
        section = (
          <div>
            <div>
              <div className="section-item"></div>
              <div className="grid-rows">
                "wot"
              </div>
            </div>
          </div>
        );
      }
    }else{
      if(type === "Order"){
        var orderedItems = itemData.acceptedOffer.map((item, index) => {
          return (<div key={index}>
              {"Price: "+ item["price"] + " "}
              {item["eligibleQuantity"]["value"] + "x "}
              {item["itemOffered"]["name"].substring(0, 35) + "..."}
            <img src={item["itemOffered"]["image"]} />
            </div>)
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
        var orderedItems = itemData.partOfOrder.acceptedOffer.map((item, index) => {
          console.log(item);
          return (<div key={index}>
              {"Price: "+ item["price"] + " "}
              {item["eligibleQuantity"]["value"] + "x "}
              {item["itemOffered"]["name"]}
            <img src={item["itemOffered"]["image"]} /> </div>)
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
      <div>
        <Collapsible trigger={<FontAwesome name={"angle-down"} style={{width: '100%', textAlign: 'center', color: "black"}}/>} transitionTime={150}>
          <div style={{textAlign: "center"}}><h5>The fine details</h5></div>
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
