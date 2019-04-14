import React, { Component } from 'react';

class ImageUploaderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) =>
        this.setState({ userInput: e.target.value });

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        console.log('submitting');

        this.props.handleAddPhoto(this.state.userInput);
        this.setState({
            userInput: ''
        });
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
