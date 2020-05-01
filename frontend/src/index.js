import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';
import './assets/styles/index.scss';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

ReactDOM.render(<App />, document.getElementById('root'));
