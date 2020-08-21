import React from "react";
import ReadingButton from "../../ReadingButtons/ReadingButton";

const ReadingCard = () => {
  return (
    <div className="d-flex mt-3">
      <div className="col-3 px-0">
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394285531i/20564._SY180_.jpg"
          alt=""
          className="w-100"
        />
      </div>
      <div className="col-9">
        <h4 className="h4">The Mill on the Floss</h4>
        <h6>by George Elliot</h6>
        <ReadingButton
          buttonText="Currently Reading"
          color="outline-deep-purple"
          size="sm"
        />
      </div>
    </div>
  );
};

export default ReadingCard;
