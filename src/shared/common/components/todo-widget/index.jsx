import React, { Component } from 'react';
import Todo from './Todo';

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

	resetList = () => {
		console.log('sould reset!!!');
	}

	render() {
		return (
			<Todo
				setTodo={this.setTodo}
				removeTodo={this.removeTodo}
				value={this.state.todo}
				createTodo={this.createTodo}
				todoItems={this.state.todoItems}
				resetList={this.resetList}
			>
				<Todo.Form />
				<Todo.List />
				<Todo.Reset />
			</Todo>
		);
	}
}

export default TodoWidget;
