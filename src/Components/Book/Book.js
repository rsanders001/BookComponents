import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => (
  <div className="Book">
      <hr></hr>
      <h3 id="title">{props.title}</h3>
      <img src="https://rsanders9.bitlampsites.com/wpd/FinalProject/wordpress/wp-content/uploads/2020/10/thelightningthief.jpg"></img>
      <p dangerouslySetInnerHTML={{__html: props.body}}></p>
      <hr></hr>
  </div>
);

Book.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    img: PropTypes.string
};

Book.defaultProps = {
    title: "Book Title",
    body: "Book Body",
    imgURL: "https://rsanders9.bitlampsites.com/wpd/FinalProject/wordpress/wp-content/uploads/2020/10/thelightningthief.jpg"

};

export default Book;
