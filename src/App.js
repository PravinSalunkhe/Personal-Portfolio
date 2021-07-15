import './App.css';
import { Component } from 'react/cjs/react.production.min';
import React from 'react';
import { Switch , Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Loading from './Loading';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import NavbarTop from './NavbarTop';

function MainPage(props) {
    return ( 
    <div className="Main">
      <div id="Home" className="element2">
      <Home />
      </div>
      <div id="About" className="element2" >
      <About />
      </div>
      <div id="Skills" className="element2">
      <Skills />
      </div>
      <div id="Projects" className="element2">
      <Projects />
      </div>
      <div id="cont-foot">
      <div id="Contact" className="element2">
      <Contact />
      </div>
      <br></br><br></br>
      <div id="Footer" className="element2">
      <Footer />
      </div>
      </div>
    </div>
    )    
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading: true
    }
  }
 
  componentDidMount() {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });  
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  }
  render() {  
    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loading />
          ) : ( 
          <BrowserRouter>
          <NavbarTop />
          <Switch>
            <Route path="/" component= {MainPage} />
          </Switch>
          </BrowserRouter>
          )
      }     
      </div>
    );
  }
}

export default App;
