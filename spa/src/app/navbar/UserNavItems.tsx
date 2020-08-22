import React from "react";
import {
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { useLocation } from "react-router-dom";

const UserNavItems = () => {
  const location = useLocation();

  return (
    <MDBNavbarNav left>
      <MDBNavItem active={location.pathname === "/feed"}>
        <MDBNavLink to="/feed">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem active={location.pathname === "/my-books"}>
        <MDBNavLink to="/my-books">My books</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <div className="d-inline">Browse</div>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">All books</MDBDropdownItem>
            <MDBDropdownItem href="#!">Read Books</MDBDropdownItem>
            <MDBDropdownItem href="#!">To be Read</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
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
  );
};

export default UserNavItems;
