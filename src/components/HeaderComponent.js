import React, {Component} from 'react';
import { Navbar,Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../App.css';
class Header extends Component{

  constructor(props){
      super(props);
      this.state={
          isNavOpen: false,
      };
      this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

	render(){
		return(
			 <>
				  <Navbar dark expand="md">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link"  to='/home'>Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/xray'>X-Ray Prediction</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </div>
          </Navbar>
			</>
		);
	}
}

export default Header;