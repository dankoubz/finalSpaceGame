import React, { Component } from "react";
import "./cardSkills.css";

export default class Card extends Component {
  
  render(props) {
    
    let cardInfo = this.props.card;

    return (
      <div className="h-100 w-100">
        <div className="cardSkills">   
            {cardInfo.map((postData, index) => {
                return <p key={index}>{postData.name}</p>
            })}
        </div>
      </div> 
    );
  }
}

