import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class App extends Component {
	render() {
		return <div>Hello React Starter template!</div>
	}
}

App.propTypes = {
	testProp: PropTypes.string.isRequired
};

ReactDOM.render(<App testProp={'Hey!'}/>, document.getElementById('app'));