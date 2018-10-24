import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppComponent from './components/App';

function renderApp(App: any) {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root'),
  );
}

renderApp(AppComponent);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}
