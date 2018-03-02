//@flow

import { Redirect, Route, Switch } from 'react-router';

import ProfileLayout from './layout/ProfileLayout';
import ProjectLayout from './layout/ProjectLayout';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashLayout from './layout/SplashLayout';

// Add new Layout routes here
const App = ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={SplashLayout} />
                <Route path="/profile" component={ProfileLayout} />
                <Route path="/projects" component={ProjectLayout} />
            </Switch>
        </Router>
    )
};

export default App;