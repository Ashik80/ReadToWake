import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import BookStore from "../../stores/bookStore";
import { observer } from "mobx-react-lite";
import ReadingButton from "../ReadingButtons/ReadingButton";

interface IProps {
  id: string;
}

const BookInfo: React.FC<RouteComponentProps<IProps>> = ({ match }) => {
  const { getBook, book } = useContext(BookStore);

  useEffect(() => {
    getBook(parseInt(match.params.id));
  }, [getBook, match.params.id]);

  return (
    <div className="container mt-3">
      <div className="card p-5">
        <div className="d-flex">
          <div className="col-3">
            <img src={book?.thumbnail} alt="" className="w-100" />
            <ReadingButton
              buttonText="Want to Read"
              color="deep-purple"
              size="sm"
              fluid
            />
          </div>
          <div className="col-9">
            <h2 className="card-title h2">{book?.name}</h2>
            <h5 className="h5">by {book?.authorName}</h5>
            <p className="card-text mt-5">
              {book?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(BookInfo);
