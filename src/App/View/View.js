import React from 'react';
import './View.css';

export class View extends React.Component {
	state = {};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="view-container">This is View Page</div>
		);
	}
}

export default View;
