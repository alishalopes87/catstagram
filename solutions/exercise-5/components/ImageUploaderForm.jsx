import React, { Component } from 'react';

class ImageUploaderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    handleChange = (e) =>
        this.setState({ url: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.url);
    }

    render() {
        return (
            <form className="ImageUploaderForm">

                <input
                    placeholder="Add URL here"
                    value={this.state.url}
                    onChange={this.handleChange} />

                <button className="SubmitButton" onClick={this.handleSubmit} >
                    Submit
                </button>

            </form>
        )
    }
}

export default ImageUploaderForm;
