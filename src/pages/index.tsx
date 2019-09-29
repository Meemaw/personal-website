import React from 'react';
import { Switch } from 'react-router-dom';
import PageRoute from 'components/PageRoute';

const HomePage = React.lazy(() => import('./Home'));

const Routes = () => {
  return (
    <Switch>
      <PageRoute exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
