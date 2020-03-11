import React, {Component} from "react";
import {BrowserRouter as Route, Link} from "react-router-dom";
import "./nav.css";

class Navigation extends Component {
    
    render() {
        return (
            <div className="navPos d-flex align-items-center">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/dev">Dev</Link></li>
                        <li><Link to="/creative">Creative</Link></li>
                        <li><Link to="/work">Work</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;


