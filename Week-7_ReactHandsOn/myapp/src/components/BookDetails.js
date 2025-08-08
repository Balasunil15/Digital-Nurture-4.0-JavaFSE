
import React from 'react';

function BookDetails(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <p>Price: {book.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default BookDetails;
