import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import transactions from './transactions';
import filters from './filters';
import sorting from './sorting';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  transactions,
  filters,
  sorting
});

export default rootReducer;
