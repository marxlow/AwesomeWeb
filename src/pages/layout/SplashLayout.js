//@flow

import { Link, Route } from 'react-router';
import React, { Component } from 'react';

class SplashLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-gradient-info">
                <header>
                    <p> Header for Splash </p>
                    <button type="button" className="btn btn-primary">Primary</button>
                </header>
                <div>
                </div>
                <footer>
                </footer>
            </div>
        );
    }
}

export default SplashLayout;