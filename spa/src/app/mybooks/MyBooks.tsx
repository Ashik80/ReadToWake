import React, { useEffect, useContext } from "react";
import BookStore from '../../stores/bookStore';
import { observer } from "mobx-react-lite";

const MyBooks = () => {
  const { books, getBooks } = useContext(BookStore)

  useEffect(() => {
    getBooks()
  }, [getBooks]);

  return (
      <div>
          {books.map(book => <p key={book.id}>{book.name}</p>)}
      </div>
  )
};

export default observer(MyBooks);
