import React from 'react'

export default class App extends React.Component {

	state = {
		astronauts: []
	}

	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json").then(response => response.json()).then(response => {
			this.setState({
				astronauts: response.people
			}, () => console.log(this.state))
		})

	}

	render() {
		return (this.state.astronauts).map(person => <p>{person.name} {person.craft}</p>)
	}

}

