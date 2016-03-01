import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../reducers';

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  debugware.push(createLogger({
    collapsed: true,
    predicate: () =>
      process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
  }));
}

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, ...debugware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(history, initialState) {
  const store = finalCreateStore(
    rootReducer,
    initialState,
    applyMiddleware(syncHistory(history))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}