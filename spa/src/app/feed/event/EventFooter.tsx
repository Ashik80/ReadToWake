import React from "react";
import { MDBFormInline } from "mdbreact";
import CircularImage from "../../cicularImage/CircularImage";

const EventFooter = () => {
  return (
    <div className="card-footer">
      <div className="d-flex">
        <div className="col-1">
          <CircularImage imageUrl="https://images.unsplash.com/photo-1597792694946-85c191c617dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" />
        </div>
        <MDBFormInline className="w-100">
          <div className="md-form my-0 w-100">
            <input
              type="text"
              placeholder="Write a comment..."
              className="form-control w-100"
            />
          </div>
        </MDBFormInline>
      </div>
    </div>
  );
};

export default EventFooter;
