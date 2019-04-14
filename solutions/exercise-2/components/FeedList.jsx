import React, { Component } from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends Component {
    render() {
        return (
            <div className="FeedList">
                <FeedItem />
            </div>
        );
    }
};

export default FeedList;


