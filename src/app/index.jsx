import React, { Component } from 'react';

class NameInput extends Component {
	render() {
		return (
			<div>
				{console.log('name input was rendered too')}
				<label htmlFor="#name">Name</label>
				<input type="text" name="name" onChange={this.props.onChange} id="name"/>
			</div>
		);
	}
}

class SurnameInput extends Component {
	render() {
		return (
			<div>
				{console.log('surname input rendered')}
				<label htmlFor="#surname">Surname</label>
				<input type="text" name="surname" onChange={this.props.onChange} id="surname"/>
			</div>
		);
	}
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			surname: '',
		};
	}

	updateName = ({ target: { value } }) => {
		this.setState({ name: value });
	}

	updateSurname = ({ target: { value } }) => {
		this.setState({ surname: value });
	}

	render() {
		return (
			<div>
				<h1>Some Form</h1>
				{console.log('parent rendered')}
				<form>
					<NameInput onChange={this.updateName}/>
					<SurnameInput onChange={this.updateSurname} />
					<div>
						<label htmlFor="#surname">Your Feedback</label>
						<textarea name="message" id="message" defaultValue={JSON.stringify(this.state)} cols="30" rows="10" />
					</div>
				</form>
			</div>
		);
	}
}
