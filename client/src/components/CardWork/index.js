import React, { Component } from "react";
import "./cardWork.css";

export default class Card extends Component {
  
  render() {
    
    let cardInfo = this.props.card;

    return (
      <div className="h-100 w-100">
        <div className="cardDev">
            {cardInfo.map((postData, index) => {
                return  <div key={index}>
                        <p>{postData.name}</p>
                        <p>{postData.description}</p>
                </div>
            })}
        </div>
      </div>
    );
  }
}

