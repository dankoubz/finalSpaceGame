import React, {Component} from "react";
// eslint-disable-next-line
import {BrowserRouter as Route, Link} from "react-router-dom";
import "./nav.css";

class Navigation extends Component {
    
    render() {
        return (
            <div className="navPos d-flex justify-content-center">
                <nav>
                    <Link className="pr-2" to="/">Home</Link>
                    <Link className="pr-2" to="/skills">Skills</Link>
                    <Link className="pr-2" to="/dev">Dev</Link>
                    <Link className="pr-2" to="/creative">Creative</Link>
                    <Link to="/work">Work</Link>
                </nav>
            </div>
        );
    }
}

export default Navigation;


