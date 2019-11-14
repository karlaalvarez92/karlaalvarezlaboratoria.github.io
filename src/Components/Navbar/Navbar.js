import React, { Component } from "react";
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li id = "item" className="nav-item">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li id = "item" className="nav-item">
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <img src={this.props.logo} alt="" className= "nav-item" id="logo"/>
            <li id = "item" className="nav-item">
              <Link
                activeClass="active"
                to="About me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About me
              </Link>
            </li>
            <li id = "item" className="nav-item">
              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            
            <li id = "item" className="nav-item">
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}