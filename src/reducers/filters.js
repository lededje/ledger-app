import _ from 'lodash';

const initialState = {};

export default function filters(state = initialState, action) {

  switch(action.type) {

    case 'SET_FILTER_TYPE':

      return {
        ...state,
        [action.property]: {
          filter: action.filter,
          value: action.value,
          filterType: action.filterType,
        }
      };

      break;

    case 'UNSET_FILTER_TYPE':

      return _.omit(state, action.property);

      break;

    default:
      return state
      break;
  }
}
