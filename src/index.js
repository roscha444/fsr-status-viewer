import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import StatusState from './context/StatusContext/StatusState.js';

ReactDOM.render(
  <React.StrictMode>
    <StatusState>
      <Dashboard />
    </StatusState>
  </React.StrictMode>,
  document.getElementById('root')
);