'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
	render() {
		return <h1>{this.props.testProp} React Starter template!</h1>
	}
}

App.propTypes = {
	testProp: PropTypes.string.isRequired
};