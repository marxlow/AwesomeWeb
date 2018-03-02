//@flow

import { Link, Route } from 'react-router';
import React, { Component } from 'react';

import Arbitrage from '../projects/arbitrage/Arbitrage';

class ProfileLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <p> Header for projects </p>
                </header>
                <div>
                    <Route exact path="/projects/arbitrage" component={Arbitrage} />
                </div>
                <footer>
                </footer>
            </div>
        );
    }
}

export default ProfileLayout;