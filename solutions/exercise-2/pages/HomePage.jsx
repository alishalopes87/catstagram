import React, { Component } from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';


class HomePage extends Component {
    render() {
    	return (
    		<div className="HomePage">
    			<ImageUploaderForm />
    			<FeedList />
    		</div>
    	);
    }
}

export default HomePage;
