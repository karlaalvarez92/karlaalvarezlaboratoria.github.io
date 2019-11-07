import React, {Component} from 'react';
//import logo from './tenor.gif';
import './App.css';
import Navbar from './Navbar'
import Skills from './Skills';
import Contact from './Contact';
import About from './AboutMe';
import Proyects from './Proyects';
import Home from './Home';
//import Butterfly from './Butterflies'

class App extends Component {
  render(){
  return (
    <div className="App">
        <Navbar />
        <Home
          title="Karla Alvarez"
          subtitle={"Front-end developer Jr."}
          dark={false}
          id="Home"
        />
        <About
          title="Acerca de mi"
          //subtitle={}
          dark={true}
          id="About me"
        />
        <Skills
          title="Skills"
          //subtitle={dummyText}
          dark={false}
          id="Skills"
        />
        <Proyects
          title="Projects"
          //subtitle={dummyText}
          dark={true}
          id="Projects"
        />
        <Contact
          title="Contact"
          //subtitle={dummyText}
          dark={false}
          id="Contact"
        />
        {/* <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        /> */}
      </div>
    );
  }
}

export default App;
