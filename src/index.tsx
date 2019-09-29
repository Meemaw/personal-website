import 'styles/index.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './pages';

function renderApp(AppComponent: typeof App) {
  render(
    <Router>
      <AppComponent />
    </Router>,
    document.getElementById('root'),
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp: typeof App = require('./components/App').default;
    renderApp(NextApp);
  });
}
