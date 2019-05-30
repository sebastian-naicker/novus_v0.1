import React, { Component } from 'react';

class TodoForm extends Component {
	render() {
		const { setTodo, createTodo, value } = this.props;
		return (
			<form className="panel-block">
				<input type="text" onChange={setTodo} className="input is-pulled-left" placeholder="My next todo" value={value}/>
				<button onClick={createTodo} className="button is-primary is-pulled-right">Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
