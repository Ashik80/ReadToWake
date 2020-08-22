import React, { useState, useContext } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { NavLink } from "react-router-dom";
import { AuthStoreContext } from "../../stores/authStore";
import UserNavItems from "./UserNavItems";
import SearchBarAndUser from "./SearchBarAndUser";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthStoreContext);

  const [isOpen, setisOpen] = useState(false);

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  return (
    <MDBNavbar color="deep-purple" className="px-5" dark expand="md">
      <NavLink className="navbar-brand" to="/">
        <strong>Read 2 wake</strong>
      </NavLink>
      <MDBNavbarToggler onClick={toggleCollapse} right />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        {isLoggedIn && <UserNavItems />}
        <MDBNavbarNav right>
          {isLoggedIn ? (
            <SearchBarAndUser />
          ) : (
            <MDBNavItem>
              <LoginForm />
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
