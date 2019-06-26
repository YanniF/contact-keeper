import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, clearCurrent, updateContact, current } = contactContext;

	useEffect(
		() => {
			if (current !== null) {
				setContact(current);
			}
			else {
				setContact({
					name: '',
					email: '',
					phone: '',
					type: 'personal',
				});
			}
		},
		[ contactContext, current ],
	);

	const [ contact, setContact ] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (current === null) {
			addContact(contact);
		}
		else {
			updateContact(contact);
		}

		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? 'Edit' : 'Add'} Contact</h2>
			<input type="text" name="name" value={name} placeholder="Name" onChange={onChange} />
			<input type="email" name="email" value={email} placeholder="E-mail" onChange={onChange} />
			<input type="text" name="phone" value={phone} placeholder="Phone" onChange={onChange} />
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="personal"
				id="personal"
				checked={type === 'personal'}
				onChange={onChange}
			/>{' '}
			<label htmlFor="personal" style={{ marginRight: '2rem' }}>
				{' '}
				Personal
			</label>
			<input
				type="radio"
				name="type"
				value="professional"
				id="professional"
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			<label htmlFor="professional"> Professional</label>
			<input
				type="submit"
				value={(current ? 'Update' : 'Add') + ' Contact'}
				className="btn btn-primary btn-block"
			/>
			{current && (
				<button className="btn btn-light btn-block" onClick={clearAll}>
					Clear
				</button>
			)}
		</form>
	);
};

export default ContactForm;
