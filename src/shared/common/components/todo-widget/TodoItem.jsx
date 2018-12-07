import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		const { item, onRemoveTodo } = this.props;
		return (
			<li className="panel-block todo-item">
				<span className="panel-icon is-pulled-left">
					<i className="fas fa-sticky-note" />
				</span>
				<span>{item.content}</span>
				<button data-id={item.id} onClick={onRemoveTodo} className="delete is-pulled-right" />
			</li>
		);
	}
}

export default TodoItem;
