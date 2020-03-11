import React, {Component} from "react";
import "./header.css";

class Header extends Component {
    
    render(props) {
        return (
          <div className="headerPos d-flex justify-content-center">
            <header>
              <h1>{this.props.pageTitle}</h1>
            </header>
          </div>  
        );
    }
}

export default Header;


