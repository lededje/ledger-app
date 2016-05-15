import _ from 'lodash';

const initialState = {
  property: 'created',
  type: 'date',
  ascending: false
};

export default function sorting(state = initialState, action) {

  switch(action.type) {

    case 'SET_SORT_ORDER':

      return {
        ...state,
        property: action.property,
        type: action.sortType,
        ascending: action.ascending || action.property === state.property ? !state.ascending : false
      }

    default:
      return state
      break;
  }
}
