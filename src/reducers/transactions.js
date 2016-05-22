import _ from 'lodash';
import big from 'big.js';

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

    // The description is usually shite and the merchant is not always present
    _name: (!_.isNull(tx.merchant) ? tx.merchant.name : tx.description),

    // Rather than change how filtering numbers work store another record that contains the value in major currencies.
    _amount: parseFloat(big(tx.amount || 0).div('100')),

    _category: tx.category.replace(/\_/g, ' ')
  }
}