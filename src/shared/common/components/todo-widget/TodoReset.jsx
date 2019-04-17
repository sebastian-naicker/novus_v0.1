import React, { Component } from 'react';

class TodoReset extends Component {
	render() {
		const { resetList } = this.props;
		return (
			<div className="panel-block">
				<button className="button" onClick={resetList}>Reset</button>
			</div>
		);
	}
}

export default TodoReset;

