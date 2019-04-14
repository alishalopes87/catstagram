import React, { Component } from 'react';

class Likes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numLikes: this.props.totalLikes,
			liked: false
		};
	}

	handleLikeButtonClick = () => {
		let { numLikes } = this.state;

		if (this.state.liked) {
			numLikes -= 1;
		} else {
			numLikes += 1;
		}

		this.setState({
			numLikes: numLikes,
			liked: !this.state.liked
		});
	}

	render() {
		return (
			<div className="Likes">
				<span>{ this.state.numLikes } likes</span>
				<button className="Likes-like-button" onClick={this.handleLikeButtonClick}>
					{ this.state.liked ? 'Liked!' : 'Not liked (yet)' }
				</button>
			</div>
		);
	}
}

export default Likes;
