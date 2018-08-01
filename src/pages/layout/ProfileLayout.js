//@flow

import { Link, Route, Switch } from 'react-router';
import React, { Component } from 'react';

import Home from '../home/Home';
// import NavBar from '../../components/Bar/NavBar';
import Projects from '../projects/Projects';

// Add new components that are using the ProfileLayout here
class ProfileLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<header>
					{/* <NavBar /> */}
				</header>
				<div>
					<Switch>
						<Route path="/profile/home" component={Home} />
						<Route path="/profile/projects" component={Projects} />
					</Switch>
				</div>
				<footer>
				</footer>
			</div>
		);
	}
}

export default ProfileLayout;