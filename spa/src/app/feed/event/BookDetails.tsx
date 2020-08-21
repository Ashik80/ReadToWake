import React from "react";
import ReadingButton from "../../ReadingButtons/ReadingButton";

const BookDetails = () => {
  return (
    <div className="d-flex">
      <div className="col-3">
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394285531i/20564._SY180_.jpg"
          alt=""
          className="w-100"
        />
      </div>
      <div className="col-9">
        <h3 className="card-title h3">The Mill on the Floss</h3>
        <h6 className="h6">by George Elliot</h6>
        <ReadingButton buttonText="Want to Read" color="deep-purple" />
        <p className="card-text mt-3">
          'If life had no love in it, what else was there for Maggie?' Brought
          up at Dorlcote Mill, Maggie Tulliver worships her brother Tom and is
          desperate to win the approval of her…
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
