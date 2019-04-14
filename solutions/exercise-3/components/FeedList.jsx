import React, { Component } from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends Component {
    render() {
        const { photos } = this.props;
        return (
            <div className="FeedList">
                {
                    photos.map((photo, i) =>
                        <FeedItem photo={photo} key={i} />
                    )
                }
            </div>
        );
    }
};

export default FeedList;
