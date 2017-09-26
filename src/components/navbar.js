import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class MyNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">When?</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/restaurants">Restaurants</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/stores">Stores</NavLink>
              </NavItem>
              <NavLink href="/activities">Activities</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
