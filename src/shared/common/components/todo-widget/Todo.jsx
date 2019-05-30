import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoListCards from './TodoListCards';
import TodoForm from './TodoForm';
import TodoReset from './TodoReset';

class Todo extends Component {
	static Form = ({ setTodo, createTodo, value }) => <TodoForm setTodo={setTodo} createTodo={createTodo} value={value} />
	static List = ({ todoItems, removeTodo }) => <TodoList todoItems={todoItems} removeTodo={removeTodo} />
	static ListCards = ({ todoItems, removeTodo }) => <TodoListCards todoItems={todoItems} removeTodo={removeTodo} />
	static Reset = (props) => props.todoItems.length > 0 ? <TodoReset resetList={props.resetList} /> : null

	render() {
		const { setTodo,  createTodo, value, todoItems, removeTodo, resetList } = this.props;
		return (
			<div className="panel">
				<h2 className="panel-heading">My Todo List</h2>
				{React.Children.map(this.props.children, child => {
					return React.cloneElement(child, this.props)
				})}
			</div>
		);
	}
}

export default Todo;
