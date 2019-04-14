import React, { Component } from 'react';

class Likes extends Component {
    render() {
        const { totalLikes } = this.props;

        return (
            <div className="Likes">
                <span>{ totalLikes } likes</span>
                <button className="LikesButton">
                    Like
                </button>
            </div>
        );
    }
}

export default Likes;
