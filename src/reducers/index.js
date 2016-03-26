import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import transactions from './transactions';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  transactions,
});

export default rootReducer;
