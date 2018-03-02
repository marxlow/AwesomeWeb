import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
