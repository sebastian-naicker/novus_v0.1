import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div className="panel">
				<h2 className="panel-heading">My Todo List</h2>
				{this.props.children}
			</div>
		);
	}
}

export default Todo;
