import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <ul className="Header">
                <li className="Logo">
                    Catstagram
                </li>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Profile
                </li>
            </ul>
        );
    }
};

export default Header;
