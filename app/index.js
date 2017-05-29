'use strict';

import React, { Component} from 'react';
import ReactDOM from 'react-dom';

//import './index.css'; /* this is not used*/

import styles from './styles/main.sass';

//Components
import App from './components/App'

ReactDOM.render(<App testProp={'Hey'}/>, document.getElementById('app'));