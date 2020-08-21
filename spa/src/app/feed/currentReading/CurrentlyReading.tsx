import React from "react";
import BookDetails from "../event/BookDetails";
import ReadingCard from "./ReadingCard";

const CurrentlyReading = () => {
  return (
    <div className="card p-4">
      <h5 className="h5">Currently Reading</h5>
      <div className="mt-4">
        <ReadingCard />
        <ReadingCard />
        <ReadingCard />
      </div>
    </div>
  );
};

export default CurrentlyReading;
