import React, { Component } from 'react';
import axios from 'axios'

const apiUrl = process.env.API_URL || `http://localhost:1337`;


class About extends Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			aboutpage: []
		}
	}


	async componentDidMount() {
		try {
			const res = await axios.get(apiUrl + '/aboutpages')
  			.then(res => {
  				console.log(res.data)
				this.setState({aboutpage: res.data})
  			});
		} catch (err) {
			console.error(err)
		}
	}
 

	render() {
		
		return (
			<div>
				{this.state.aboutpage.map((about, index) =>
					<div key={index}>
						<div key={index + 1}>
							<h1>{about.aboutusHeader}</h1>
							<p>{about.aboutusDesc}</p>
						</div>
						<div key={index + 2}>
							<h1>{about.servingcomHeader}</h1>
							<p>{about.servingcomDesc}</p>
						</div>
						<div key={index + 3}>
							<h1>{about.psychologistservHeader}</h1>
							<p>{about.psychologistservDesc}</p>
						</div>
						<div key={index + 4}>
							<h1>{about.boardmemHeader}</h1>
							<p>{about.boardmemDesc}</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default About;