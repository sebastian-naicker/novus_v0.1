import React, { Component } from 'react';

class TodoList extends Component {
	render() {
		const { todoItems, removeTodo } = this.props;
		return (
			<ul>
				{todoItems.map((item, index) => (
					<li key={index} className="panel-block todo-item">
						<span className="panel-icon is-pulled-left">
							<i className="fas fa-sticky-note" />
						</span>
						<span>{item}</span>
						<button data-id={index} onClick={removeTodo} className="delete is-pulled-right" />
					</li>
				))}
			</ul>
		);
	}
}

export default TodoList;
