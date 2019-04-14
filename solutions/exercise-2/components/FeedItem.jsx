import React, { Component } from 'react';
import Likes from './Likes.jsx';

class FeedItem extends Component {
    render() {
        return (
            <div className="FeedItem">
                <img className="Image" />
                <Likes />
            </div>
        );
    }
}

export default FeedItem;
