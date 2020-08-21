import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBFormInline,
} from "mdbreact";
import CircularImage from "../cicularImage/CircularImage";
import { useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setisOpen] = useState(false);

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  return (
    <MDBNavbar color="deep-purple" className="py-3 px-5" dark expand="md">
        <NavLink className="navbar-brand" to="/">
          <strong>Read 2 wake</strong>
        </NavLink>
        <MDBNavbarToggler onClick={toggleCollapse} right />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active={location.pathname === '/feed'}>
              <MDBNavLink to="/feed">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={location.pathname === '/my-books'}>
              <MDBNavLink to="/my-books">My books</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-inline">Community</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Discussion</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Quotes</MDBDropdownItem>
                  <MDBDropdownItem href="#!">People</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control mr-sm-2"
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className="d-flex align-items-center">
                  <div className="user-image" style={{width: 40}}>
                    <CircularImage />
                  </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">
                    <i className="fa fa-user-circle mr-3" /> Profile
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <i className="fa fa-user-o mr-3" /> Friends
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    <i className="fa fa-users mr-3" />
                    Groups
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
