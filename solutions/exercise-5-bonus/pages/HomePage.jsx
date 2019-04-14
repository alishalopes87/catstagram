import React, { Component } from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: data.photos
		}
	}

	handleAddPhoto = (url) => {
		const newPhoto = {
			url: url,
			likes: 0
		};

		this.setState((prevState) => {
			return {
				photos: prevState.photos.concat([newPhoto])
			};
		});
	}

	render() {
		const { photos } = data;

		return (
			<div className="HomePage">
				<ImageUploaderForm handleAddPhoto={this.handleAddPhoto} />
				<FeedList photos={this.state.photos} />
			</div>
		);
	}
}

export default HomePage;
