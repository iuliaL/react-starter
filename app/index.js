import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

export default class App extends Component {
	render() {
		return <div>{this.props.testProp} React Starter template!</div>
	}
}

App.propTypes = {
	testProp: PropTypes.string.isRequired
};

ReactDOM.render(<App testProp={'Hey'}/>, document.getElementById('app'));