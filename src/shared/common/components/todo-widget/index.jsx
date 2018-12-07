import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoWidget extends Component {
	state = {
		todo: '',
		todoItems: [],
	};

	createTodo = e => {
		e.preventDefault();
		const { todoItems, todo } = this.state;
		if (todo === '') return null;
		this.setState({ todoItems: [todo, ...todoItems], todo: '' });
	};

	removeTodo = e => {
		const { todoItems } = this.state;
		const id = Number(e.target.dataset['id']);
		const updatedItems = todoItems.filter((item, index) => index !== id);
		this.setState({ todoItems: updatedItems });
	};

	setTodo = e => {
		this.setState({ todo: e.target.value });
	};

	render() {
		return (
			<Todo>
				<TodoForm setTodo={this.setTodo} createTodo={this.createTodo} value={this.state.todo} />
				<TodoList todoItems={this.state.todoItems} onRemoveTodo={this.removeTodo} />
			</Todo>
		);
	}
}

export default TodoWidget;
