import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => (
  <div className="Book">
      <hr></hr>
      <h3 id="title">{props.title}</h3>

      <p dangerouslySetInnerHTML={{__html: props.body}}></p>
      <hr></hr>
  </div>
);

Book.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

Book.defaultProps = {
    title: "Book Title",
    body: "Book Body"

};

export default Book;
