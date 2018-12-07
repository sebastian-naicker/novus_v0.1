import React, { Component } from 'react';
import Todo from 'common/components/todo';

class TodoPage extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Todo App</h1>
				<Todo />
			</React.Fragment>
		);
	}
}

export default TodoPage;
