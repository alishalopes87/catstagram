import React, { Component } from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

const { photos } = data;

class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<ImageUploaderForm />
				<FeedList photos={photos} />
			</div>
		);
	}
}

export default HomePage;
