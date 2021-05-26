import React, { Component } from 'react';
import axios from 'axios'

const apiUrl = process.env.API_URL || `http://localhost:1337`;


class Search extends Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			psychologist: []
		}
	}


	async componentDidMount() {
		try {
			const res = await axios.get(apiUrl + '/psychologists')
  			.then(res => {
  				console.log(res.data)
				this.setState({psychologist: res.data})
  			});
		} catch (err) {
			console.error(err)
		}
	}
 

	render() {
		
		return (
			<div>
				{this.state.psychologist.map((psych, index) => 
					<h1 key={index}>{psych.name}</h1>
				)}
			</div>
		);
	}
}

export default Search;