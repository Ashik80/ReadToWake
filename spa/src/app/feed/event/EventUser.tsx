import React from "react";
import './EventUser.css';
import CircularImage from "../../cicularImage/CircularImage";

const EventUser = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="user-img mr-3">
        <CircularImage />
      </div>
      <p>
        <strong>Sarah</strong> wants to read
      </p>
    </div>
  );
};

export default EventUser;
