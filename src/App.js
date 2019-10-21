import React, {Component} from 'react';
//import logo from './tenor.gif';
import './App.css';
import Navbar from './Navbar'
import Skills from './Skills';
import Contact from './Contact';
import About from './AboutMe';
import Proyects from './Proyects';
//import Butterfly from './Butterflies'

class App extends Component {
  render(){
  return (
    <div className="App">
        <Navbar />
        <About
          title="About me"
          //subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Skills
          title="Skills"
          //subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Proyects
          title="Projects"
          //subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Contact
          title="Contact"
          //subtitle={dummyText}
          dark={false}
          id="section4"
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
