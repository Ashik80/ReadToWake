import React from "react";
import {
  MDBDropdown,
  MDBBtnGroup,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

interface IProps {
  buttonText: string;
  color?: string;
  size?: string;
  fluid?: boolean
}

const ReadingButton: React.FC<IProps> = ({ buttonText, color, size, fluid }) => {
  return (
    <MDBDropdown>
      <MDBBtnGroup className={`${fluid && 'w-100'}`}>
        <button
          type="button"
          className={`btn btn-${color} ${size && `btn-${size}`} mx-0`}
        >
          {buttonText}
        </button>
        <MDBDropdownToggle size={size} caret color={color} className="mx-0" />
        <MDBDropdownMenu>
          <MDBDropdownItem>Want to Read</MDBDropdownItem>
          <MDBDropdownItem>Reading</MDBDropdownItem>
          <MDBDropdownItem>Done Reading</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBBtnGroup>
    </MDBDropdown>
  );
};

export default ReadingButton;
