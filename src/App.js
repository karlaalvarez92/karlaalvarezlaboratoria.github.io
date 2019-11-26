import React, {Component} from 'react';
//import logo from './tenor.gif';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import About from './Components/AboutMe/AboutMe';
import Proyects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
//import Butterfly from './Butterflies'
import portfolio from './portfolio';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logo: "",
      title: "",
      subtitle: "",
      aboutMe: "",
      softSkills: "",
      technicallSkills: ""
    }
  }

  componentDidMount= () => {
    let data= portfolio.portfolio
    data.map(el =>
      this.setState({
        logo: el.logo,
        title: el.title,
        subtitle: el.subtitle,
        aboutMe:el.aboutMe,
        softSkills: el.softSkills,
        technicallSkills: el.technicallSkills,
        projects: el.projects,
        contact: el.contact
      })
    )
}

  render(){
  
  return (
    <div className="App">
        <Navbar logo= {this.state.logo} />
        {/* <Home
          title= {this.state.title}
          subtitle={this.state.subtitle}
          id="Home" 
        />
         <Proyects
          title="Projects"
          //subtitle={dummyText}
          dark={true}
          id="Projects"
          projects = {this.state.projects}
        />
        <About
          title="About me"
          //subtitle={}
          dark={true}
          id="About me"
          aboutMe = {this.state.aboutMe}
        />
        <Skills
          title="Skills"
          //subtitle={dummyText}
          dark={false}
          id="Skills"
          softSkills={this.state.softSkills}
          technicallSkills={this.state.technicallSkills}
        />
       
        <Contact
          title="Contact"
          //subtitle={dummyText}
          dark={false}
          id="Contact"
          contact = {this.state.contact}
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
