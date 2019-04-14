import React, { Component } from 'react';
import Likes from './Likes.jsx';

class FeedItem extends Component {
    render() {
        const { photo } = this.props;
        const { url, likes } = photo;
        return (
            <div className="FeedItem">
                <img className="Image" src={url} />
                <Likes totalLikes={likes} />
            </div>
        );
    }
}

export default FeedItem;

