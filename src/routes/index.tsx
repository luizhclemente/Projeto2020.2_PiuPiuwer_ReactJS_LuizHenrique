import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Feed from '../pages/Feed';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import Redirection from './redirect';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/feed" component={Feed} isPrivate />
      <Route path="/notifications" component={Notifications} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route component={Redirection} />
    </Switch>

  );
}

export default Routes;