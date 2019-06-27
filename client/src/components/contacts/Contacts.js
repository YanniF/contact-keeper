import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please add a contact</h4>;
	}

	let display;

	if (contacts !== null && !loading) {
		if (filtered !== null) {
			display = (
				<TransitionGroup>
					{filtered.map((contact) => (
						<CSSTransition key={contact._id} timeout={500} classNames="item">
							<ContactItem contact={contact} />
						</CSSTransition>
					))}
				</TransitionGroup>
			);
		}
		else {
			display = (
				<TransitionGroup>
					{contacts.map((contact) => (
						<CSSTransition key={contact._id} timeout={500} classNames="item">
							<ContactItem contact={contact} />
						</CSSTransition>
					))}
				</TransitionGroup>
			);
		}
	}
	else {
		display = <Spinner />;
	}

	return <Fragment>{display}</Fragment>;
};

export default Contacts;
