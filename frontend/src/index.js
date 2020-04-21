import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';
import './index.scss';

axios.defaults.baseURL = 'http://localhost:8000/api/v1';

ReactDOM.render(<App />, document.getElementById('root'));
