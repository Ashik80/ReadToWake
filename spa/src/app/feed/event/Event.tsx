import React from "react";
import BookDetails from "./BookDetails";
import EventUser from "./EventUser";
import EventFooter from "./EventFooter";

const Event = () => {
  return (
    <div className="card mb-4">
      <div className="p-4">
        <EventUser />
        <div className="mt-4">
          <BookDetails />
        </div>
      </div>
      <EventFooter />
    </div>
  );
};

export default Event;
