import _ from 'lodash';

const initialState = {
  property: 'merchant.name',
  type: 'string',
  ascending: true
};

export default function sorting(state = initialState, action) {

  switch(action.type) {

    case 'SET_SORT_ORDER':

      return {
        ...state,
        property: action.property,
        type: action.sortType,
        ascending: action.ascending || action.property === state.property ? !state.ascending : true
      }

    default:
      return state
      break;
  }
}
