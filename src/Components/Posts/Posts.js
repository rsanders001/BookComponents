import React, {Component} from 'react';
import './Posts.scss';
import Post from "../Post/Post";
import axios from "axios";
import { Button } from '@material-ui/core';

export class Posts extends Component {
    postsEndpoint = 'http://mysite.com/wp-json/wp/v2/posts';

    state = {
        posts: [],
        isLoaded: false,
    }

    // run when the component is added to the page
    componentDidMount() {
        axios
            .get(this.postsEndpoint)
            .then((res) => {
                console.log('Response', res);
                this.setState({
                    posts: res.data,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log('API error', err);
            });

    }

    render() {
        return (
            <div className="posts">
                <Button color="primary">Hello World</Button>

                {this.state.isLoaded ? '' : <p>Loading</p>}
                {this.state.posts.map((post) =>
                    <Post title={post.title.rendered} body={post.content.rendered} key={post.id}/>
                )}
            </div>
        )
    }
}