import React from "react";
import "./EventUser.css";
import CircularImage from "../../cicularImage/CircularImage";

const EventUser = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="user-img mr-3">
        <CircularImage imageUrl="https://images.unsplash.com/photo-1597792694946-85c191c617dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" />
      </div>
      <p>
        <strong>Sarah</strong> wants to read
      </p>
    </div>
  );
};

export default EventUser;
