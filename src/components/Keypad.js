// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
	constructor(){
		super();

		this.inputPassword = this.inputPassword.bind(this);
	}

	inputPassword(){
		console.log('Entering password...');
	}

	render(){
		return(
			<div>
				<input type="password" onKeyUp={this.inputPassword}/>
			</div>
		);
	}
}