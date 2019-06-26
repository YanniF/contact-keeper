import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { id, name, email, phone, type } = contact;

	const onDelete = () => {
		contactContext.deleteContact(id);
		contactContext.clearCurrent();
	};

	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name} {' '}
				<span
					style={{ float: 'right' }}
					className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && (
					<li>
						<span className="fas fa-envelope-open" style={{ marginRight: '6px' }} />
						{email}
					</li>
				)}
				{phone && (
					<li>
						<span className="fas fa-phone" style={{ marginRight: '6px' }} />
						{phone}
					</li>
				)}
			</ul>
			<p>
				<button className="btn btn-info btn-sm" onClick={() => contactContext.setCurrent(contact)}>
					Edit
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
