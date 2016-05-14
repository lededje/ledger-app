import _ from 'lodash';
import moment from 'moment';

export default function transactionsFilter(txs = [], actions) {

  // const filterActions = _(this.props.filters).map((filter, attribute) => {
  // if(typeof filter.value === 'undefined') return;

  // return {
  // attribute,
  // ...filter
  // }
  // }).filter((i) => typeof i !== 'undefined').value();

  if(txs.length === 0) return [];

  if(Object.keys(actions).length === 0) return txs;

  const filteredTx = _(txs).clone().filter((tx) => {

    for(const id in actions) {

      let action = actions[id];

      // Using _.get allows attributes to reference deep objects, for example `merchant.name`

      switch(action.filter) {
        case 'less-than':
          return filters.lessThan(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'greater-than':
          console.log(_.get(tx, action.attribute), action.value, action.filterType)
          return filters.greaterThan(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'equal-to':
          return filters.equalTo(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'not-equal-to':
          return filters.notEqualTo(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'is-true':
          return filters.isTrue(_.get(tx, action.attribute), action.filterType)
          break;
        case 'is-false':
          return filters.isFalse(_.get(tx, action.attribute), action.filterType)
          break;
        case 'begins-with':
          return filters.beginsWith(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'ends-with':
          return filters.endsWith(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'contains':
          return filters.contains(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'is-set':
          return filters.isSet(_.get(tx, action.attribute), action.value, action.filterType)
          break;
        case 'is-not-set':
          return filters.isNotSet(_.get(tx, action.attribute), action.value, action.filterType)
          break;
      }
    }

    return false;

  });

  return filteredTx;

}

// The default stance is to *not* filter values out if you are unable to compare
// them. This can be overwritten by changing the default 'defaultReturn' argument.


export const filters = {
  lessThan: (a, b, type, defaultReturn = true) => {

    switch(type) {

      case 'number':
      case 'money':
        if(!_.isNumber(a) || !_.isNumber(b)) {
          return defaultReturn;
        }

        return a < b;

      case 'date':

        if(!moment(a).isValid() || !_.isNumber(b)) {
          return defaultReturn;
        }

        // For now lessThan /w a date is always relative and always in days.

        return moment(a).endOf('day').isAfter(moment().subtract(b, 'days').startOf('day'));

      default: return defaultReturn
    }
  },
  greaterThan: (a, b, type, defaultReturn = true) => {

    switch(type) {
      case 'number':
      case 'money':

        if(!_.isNumber(a) || !_.isNumber(b)) {
          return defaultReturn;
        }

        return a > b;

      case 'date':

        if(!moment(a).isValid() || !_.isNumber(b)) {
          return defaultReturn;
        }

        // For now greaterThan /w a date is always relative and always in days.
        return moment(a).endOf('day').isBefore(moment().subtract(b, 'days').startOf('day'));

      default: return defaultReturn;
    }

    !_.isNumber(b) || a > b
  },
  equalTo: (a, b, type, defaultReturn = true) => {
    switch(type) {
      case 'number':
      case 'money':
      case 'string':
        return a === b;
      case 'date':
        return moment(a).startOf('day').isSame(moment(b).startOf('day'));
      default: return defaultReturn;
    }
  },
  notEqualTo: (a, b, type, defaultReturn = true) => {
    switch(type) {
      case 'number':
      case 'money':
      case 'string':
        return a !== b;
      case 'date':
        return !moment(a).startOf('day').isSame(moment(b).startOf('day'));
      default: return defaultReturn;
    }
  },
  isTrue: (a) => a === true,
  isFalse: (a) => a === false,
  beginsWith: (a, b, defaultReturn = true) => {
    if(!_.isString(a) || !_.isString(b)) {
      return defaultReturn;
    }

    return a.toString() && a.toString().indexOf(b.toString()) === 0;
  },
  endsWith: (a, b, defaultReturn = true) => {
    if(_.isUndefined(a) || _.isUndefined(b)) {
      return defaultReturn;
    }

    return a && a.indexOf(b) === a.length - b.length;
  },
  contains: (a, b, defaultReturn = true) => {
    if(!_.isString(a) || !_.isString(b)) {
      return defaultReturn;
    }

    return a.indexOf(b) !== -1;
  },
  isSet: (a) => !_.isUndefined(a) && !_.isNull(a),
  isNotSet: _.isUndefined
}