import React, { Component } from 'react';

class TodoList extends Component {
	render() {
		const { todoItems, removeTodo } = this.props;
		return (
			<ul>
				{todoItems.map((item, index) => (
					<li key={index} className="card todo-item">
						<span>{item}</span>
					</li>
				))}
			</ul>
		);
	}
}

export default TodoList;
