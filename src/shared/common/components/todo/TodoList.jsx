import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render() {
		const { todoItems, onRemoveTodo } = this.props;
		return (
			<ul>
				{todoItems.map((item, index) => (
					<TodoItem onRemoveTodo={onRemoveTodo} item={{ content: item, id: index }} />
				))}
			</ul>
		);
	}
}

export default TodoList;
