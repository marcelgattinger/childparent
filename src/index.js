import React from 'react';
import { render } from 'react-dom';

const Context = React.createContext();

class Provider extends React.Component {
	render(){
		return(
			<Context.Provider value={this.props.store}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

function Parent () {
	return (
		<div>
			<h1>Parent</h1>
			<Child/>
		</div>
	)
}

function Child () {
	return (
		<div>
			<h1>Child</h1>
			<ConnectedGrandchild/>
		</div>
	)
}

function Grandchild ({name}) {
	return (
		<div>
			<h1>Grandchild</h1>
			<h3>{name}</h3>
		</div>
	)
}

class ConnectedGrandchild extends React.Component {
	render () {
		return (
			<Context.Consumer>
				{(name) => {
					return <Grandchild name={name}/>
				}}
			</Context.Consumer>
		)
		
	}
}

class App extends React.Component {
	render() {
		return (
				<Parent/>
		)
	}
}

const store = "Marcel"

render (
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root'))