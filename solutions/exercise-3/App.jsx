import React, { Component } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomePage />
            </div>
        );
    }
}

export default App;
