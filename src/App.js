import React, {Component} from 'react';
import logo from './tenor.gif';
import './App.css';
import Navbar from './Router'
import Skills from './Skills';
import Contact from './Contact';
import About from './AboutMe';
import Proyects from './Proyects';
//import Butterfly from './Butterflies'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar/>
      <img src={logo} className="App-logo" alt="logo" />
      <About/>
      <Skills/>
      <Proyects/>
      <Contact/> 
    </div>
  
  )}
}

export default App;
