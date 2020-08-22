import React, { useContext } from "react";
import {
  MDBNavItem,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import CircularImage from "../cicularImage/CircularImage";
import { AuthStoreContext } from "../../stores/authStore";

const SearchBarAndUser = () => {
  const { logout, userImage } = useContext(AuthStoreContext);

  return (
    <>
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
            <div className="user-image" style={{ width: 40 }}>
              <CircularImage imageUrl={userImage!} />
            </div>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default" right>
            <MDBDropdownItem>
              <i className="fa fa-user-circle mr-3" /> Profile
            </MDBDropdownItem>
            <MDBDropdownItem>
              <i className="fa fa-user-o mr-3" /> Friends
            </MDBDropdownItem>
            <MDBDropdownItem>
              <i className="fa fa-users mr-3" /> Groups
            </MDBDropdownItem>
            <MDBDropdownItem onClick={logout}>
              <i className="fa fa-sign-out mr-3" /> Logout
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </>
  );
};

export default SearchBarAndUser;
