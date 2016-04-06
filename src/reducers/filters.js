import _ from 'lodash';

const initialState = {};

export default function filters(state = initialState, action) {

  switch(action.type) {

    case 'SET_FILTER_TYPE':

      return {
        ...state,
        [action.attribute]: {
          filter: action.filter,
          value: action.value,
        }
      };

      break;

    case 'UNSET_FILTER_TYPE':

      return _.omit(state, action.attribute);

      break;

    default:
      return state
      break;
  }
}
