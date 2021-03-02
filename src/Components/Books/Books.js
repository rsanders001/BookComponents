import React, {Component} from 'react';
import './Books.scss';
import Book from "../Book/Book";
import axios from "axios";

export class Books extends Component {
    postsEndpoint = 'https://rsanders9.bitlampsites.com/wpd/FinalProject/wordpress/wp-json/wp/v2/book';

    state = {
        books: [],
        isLoaded: false,
    }

    // run when the component is added to the page
    componentDidMount() {
        axios
            .get(this.postsEndpoint)
            .then((res) => {
                console.log('Response', res);
                this.setState({
                    books: res.data,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log('API error', err);
            });

    }

    render() {
        return (
            <div className="books">
                {this.state.isLoaded ? '' : <p>Loading</p>}
                {this.state.books.map((book) =>
                    <Book title={book.title.rendered} body={book.content.rendered}  key={book.id}/>
                )}
            </div>
        )
    }
}