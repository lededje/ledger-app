import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Love } from 'containers/Love';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="love" component={Love} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
