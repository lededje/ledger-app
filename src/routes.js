import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import App from 'containers/App';
import Transactions from 'containers/Transactions';
import Love from 'containers/Love';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Transactions} />
  	<Route path="love" component={Love} />
    <Route status={404} path="*" component={Transactions} />
  </Route>
);
