import React, { Component } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {

  // styleMenu={
  //   display: block
  // }

  constructor() {
    super();
    this.state = {
      displayMenu:false
    }
  }
    // openMenu= ()=>{
    //   this.setState({ displayMenu: true })
    //   }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    console.log(this.state);
    return (
      <header>
        <div className="menu-bar">
          <img
            onClick= {()=> this.setState({displayMenu: !this.state.displayMenu})}
            src="https://i.ibb.co/hmhL6wf/menu-icon.png"
            alt=""
            className="menu-icon"
          />
        </div>
        <nav>
          <ul style= {this.state.displayMenu ? {display: "block"} : {} }> 
            <li id="home">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                src={this.props.logo}
              >
                Home
              </Link>
            </li>
            <li>
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
            <li>
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
            <li id="logo">
              <img
                onClick={() => this.scrollToTop()}
                src={this.props.logo}
                alt=""
                
              />
            </li>
            <li>
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

            <li>
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
        </nav>
      </header>
    );
  }
}
