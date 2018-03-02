import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
