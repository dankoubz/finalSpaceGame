import React, {Component} from "react";
import Typical from 'react-typical'
import "./header.css";

class Header extends Component {
    
    render(props) {
        return (
          <div className="headerPos d-flex justify-content-center">
            <header className="w-100 text-center">
				<h1>{this.props.pageTitle}</h1>
				<p className="pt-1">
					<Typical className="text-center"
					steps={this.props.message}
					wrapper="p"
					/>
				</p>
            </header>
          </div>  
        );
    }
}

export default Header;


