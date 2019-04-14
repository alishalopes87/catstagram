import React, { Component } from 'react';

class Likes extends Component {
    render() {
    	return (
    		<div className="Likes">
    			<span>X likes</span>
    			<button className="LikesButton">
    				Like
    			</button>
    		</div>
    	);
    }
}

export default Likes;
