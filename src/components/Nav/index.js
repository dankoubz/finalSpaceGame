import React from "react";
import "./style.css";

const Navbar = (props) => (
  <nav className="col-12 nav-h">
      <div className="row">
          <div className="col-5 text-center">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <h3>How To Play ⇨</h3>
                </div>
                <div className="col-8 playText">
                    <h4>1. Click on faces to earn points.</h4>
                    <h4>2. Don't click on the same face twice</h4>
                </div>
              </div>
          </div>
          <div className="col-2 text-center">
              <img className="logo" src="./assets/logo.png"></img>
          </div>
          <div className="col-5 nav-h">
                <div className="w-100 h-100 d-flex text-center align-items-center">
                    <div className="col-6">
                        <h3>Your Score <br/> {props.score} </h3>
                    </div>
                    <div className="col-6">
                        <h3>High Score <br/> {props.topscore} </h3>
                    </div>
                </div>
          </div>
      </div>
  </nav>

);

export default Navbar;