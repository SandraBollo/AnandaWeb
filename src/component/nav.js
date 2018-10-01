import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavItem } from 'react-materialize'
class Nav extends Component {
  render() {
    return (
      <div className="about-page" right>
      <Navbar className="nav" brand=' A  N  A  N  D  A' right >
        <NavItem href='components.html'>Farmacia</NavItem>
        <NavItem href='components.html'>Comestibles</NavItem>
        <NavItem href='components.html'>Flores</NavItem>
        <NavItem href='components.html'><Link to="/form">Quieres vender</Link></NavItem>
    
      </Navbar>
      </div>
    )
  }
}
export default Nav;
