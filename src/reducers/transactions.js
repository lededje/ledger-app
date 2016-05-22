import _ from 'lodash';

const initialState = {"transactions": []}

export default function transactions(state = initialState, action) {

  switch(action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.transactions.map(cleanTx)
      }
    default:
      return state;
  }
}

function cleanTx (tx) {
  return {
    ...tx,
    // lodash variables are private and should be stripped before exporting data.
    _name: (!_.isNull(tx.merchant) ? tx.merchant.name : tx.description)
  }
}