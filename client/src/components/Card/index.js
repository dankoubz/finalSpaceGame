import React, { Component } from "react";
import SkillCard from "../CardSkills";
import DevCard from "../CardDev";
import CreativeCard from "../CardCreative";
import WorkCard from "../CardWork";
import "./card.css";

export default class Card extends Component {
  
  render(props) {
    
    const typeOfCard = this.props.title;

    return (
        <main className="cardPos">
            <div className="card">
                {{'Skills': <SkillCard card={this.props.information} />,
                'Dev': <DevCard card={this.props.information}/>,
                'Creative': <CreativeCard card={this.props.information}/>,
                'Work': <WorkCard card={this.props.information}/>
                }[typeOfCard]}
            </div>
        </main>
    );
  }
}

