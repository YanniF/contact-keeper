import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		<TransitionGroup>
			{alertContext.alerts.length > 0 &&
				alertContext.alerts.map((alert) => (
					<CSSTransition key={alert.id} timeout={300} classNames="item">
						<div className={`alert alert-${alert.type}`} onClick={() => alertContext.removeAlert(alert.id)}>
							<span className="fas fa-info-circle" /> {alert.msg}
						</div>
					</CSSTransition>
				))}
		</TransitionGroup>
	);
};

export default Alerts;
