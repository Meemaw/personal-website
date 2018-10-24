import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncLoad from './components/common/AsyncLoad';
import { ROOT_PATH } from './constants/paths';
import withTracker from './hocs/GoogleAnalytics';

const AsyncHomePage = AsyncLoad({
  loader: () => import('./pages/Home'),
});

export default () => {
  return (
    <Switch>
      <Route exact path={ROOT_PATH} component={withTracker(AsyncHomePage)} />
    </Switch>
  );
};
