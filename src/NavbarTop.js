import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import "./css/styles.css";
import { Link } from 'react-scroll';

class NavbarTop extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen : false,
      prevScrollpos: window.pageYOffset,
      visible: true
    }
    this.setIsOpen=this.setIsOpen.bind(this);
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  setIsOpen = () => {
    this.setState({
      isOpen : !this.state.isOpen
    })  
  }

  render() {
    return (
      <div>
        <Navbar expand="md" className= {this.state.visible ? "navbar" : "navbar--hidden"}>
          <NavbarBrand id="brand">P S</NavbarBrand>
          <NavbarToggler onClick={this.setIsOpen} id="navbar-toggler"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink className="nav-link" activeClassName="active">
                      <Link to="Home" spy={true} smooth='linear' duration={100} onClick={this.setIsOpen}>Home</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" activeClassName="active" >
                      <Link to="About" spy={true} smooth='linear' duration={100} onClick={this.setIsOpen}>About</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" activeClassName="active">
                      <Link to="Skills" spy={true} smooth='linear' duration={100} onClick={this.setIsOpen}>Skills</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" activeClassName="active">
                      <Link to="Projects" spy={true} smooth='linear' duration={100} onClick={this.setIsOpen}>Projects</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" activeClassName="active">
                      <Link to="Contact" spy={true} smooth='linear' duration={100} onClick={this.setIsOpen}>Contact</Link>
                  </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );    
  }
  
}

export default NavbarTop;