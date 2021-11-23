import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StatusState from './context/StatusContext/StatusState.js';

ReactDOM.render(
  <React.StrictMode>
    <StatusState>
      <App />
    </StatusState>
  </React.StrictMode>,
  document.getElementById('root')
);