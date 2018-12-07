import React, { Component } from 'react';
// import Todo from './Todo';
// import TodoList from './TodoList';
// import TodoForm from './TodoForm';

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
			<div className="panel">
				<h2 className="panel-heading">My Todo List</h2>
				<form className="panel-block">
					<input type="text" onChange={this.setTodo} className="input is-pulled-left" placeholder="My next todo" value={this.state.todo}/>
					<button onClick={this.createTodo} className="button is-primary is-pulled-right">Add Todo</button>
				</form>
				<ul>
					{this.state.todoItems.map((item, index) => (
						<li key={index} className="panel-block todo-item">
						<span className="panel-icon is-pulled-left">
							<i className="fas fa-sticky-note" />
						</span>
							<span>{item}</span>
							<button data-id={index} onClick={this.removeTodo} className="delete is-pulled-right" />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoWidget;
