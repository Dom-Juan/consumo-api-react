import React, { Component } from 'react';

class HelloWorld extends Component {
	state = {
		response: ''
	};

	componentDidMount() {
		this.callApi().then(response=> this.setState({response: response.express})).catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/message');
		const body = await response.json();

		if(response.status != 200) throw Error(body.message);

		return body;
	}


	render() {
		return(
			<div>
				<p>{this.state.response}</p>
			</div>
		);
	}
}

export default HelloWorld;