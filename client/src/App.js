import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactState from './context/contact/ContactState';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import './App.css';

const App = () => {
	return (
		<ContactState>
			<Router>
				<Fragment>
					<Navbar />
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" exact component={About} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</ContactState>
	);
};

export default App;
