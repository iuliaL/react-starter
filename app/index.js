import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class App extends Component {
	render() {
		return <div>Hello React Starter template!</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));