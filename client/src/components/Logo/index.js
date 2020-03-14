import React, {Component} from "react";
import "./logo.css";

class Header extends Component {
    
    render(props) {
        return (
        <div>
            <div className="logoPos">
                <aside>
                    <h3>DAN</h3>
                    <h1>KOUBLA<br/>CHVILI</h1>
                    <a href="http://www.instagram.com/dankoubz" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/icon-ig.png" className="social" alt="instagram logo"/>
                    </a>
                    <a href="http://www.linkedin.com/in/daniel-koublachvili-7aa05477" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/icon-in.png" className="ml-1 social" alt="linkedin logo"/>
                    </a>
                    <a href="https://www.google.com/search?q=Daniel+Koublachvili&oq=Daniel+Koublachvili&aqs=chrome..69i57j69i60j69i61j69i60.10412j0j7&sourceid=chrome&ie=UTF-8" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/icon-g.png" className="google" alt="google me icon"/>
                    </a>
                </aside>
            </div>  
            <div className="initals">
                <h3>DK</h3>
            </div>
        </div>
        );
    }
}

export default Header;


