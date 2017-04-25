'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
	render() {
		return <div>{this.props.testProp} React Starter template!</div>
	}
}

App.propTypes = {
	testProp: PropTypes.string.isRequired
};