import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li style={{ padding: '0 5px 0 10px' }}>|</li>
			<li>
				<a href="#!" onClick={onLogout}>
					<span className="fas fa-sign-out-alt" />
					<span className="hide-sm" /> Logout
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<nav className="navbar bg-primary">
			<h1>
				<Link to="/">
					<span className={icon} style={{ marginRight: '7px' }} />
					{title}
				</Link>
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fas fa-id-card-alt',
};

export default Navbar;
