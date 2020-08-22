import React from "react";
import ReadingCard from "./ReadingCard";
import { Link } from "react-router-dom";
import './CurrentlyReading.css';

const CurrentlyReading = () => {
  return (
    <div className="card p-4">
      <h5 className="h5">Currently Reading</h5>
      <div className="mt-1">
        <ReadingCard />
        <ReadingCard />
        <div className="mt-4 view-all-link">
          <Link to="/my-books" className="text-secondary h6">
            View All Books &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;
