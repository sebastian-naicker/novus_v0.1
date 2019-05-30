import React, { Component } from 'react';
import TodoWidget from 'common/components/todo-widget';

class TodoPage extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Todo App</h1>
				<TodoWidget />
			</React.Fragment>
		);
	}
}

export default TodoPage;
