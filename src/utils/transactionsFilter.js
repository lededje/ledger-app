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

  const cleanedActions = _(actions).clone().filter((action) => action.filter)

  if(Object.keys(cleanedActions).length === 0) return txs;

  const filteredTx = _(txs).clone().filter((tx) => {

    let passed = true;

    for(const id in cleanedActions) {

      let action = actions[id];

      // Using _.get allows attributes to reference deep objects, for example `merchant.name`

      switch(action.filter) {
        case 'less-than':
          if(!filters.lessThan(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'absolute-less-than':
          if(!filters.absoluteLessThan(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'greater-than':
          if(!filters.greaterThan(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'absolute-greater-than':
          if(!filters.absoluteGreaterThan(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'relative-equal-to':
          if(!filters.relativeEqualTo(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'equal-to':
          if(!filters.equalTo(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'not-equal-to':
          if(!filters.notEqualTo(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'is-true':
          if(!filters.isTrue(_.get(tx, action.attribute), action.filterType)) passed = false;
          break;
        case 'is-false':
          if(!filters.isFalse(_.get(tx, action.attribute), action.filterType)) passed = false;
          break;
        case 'begins-with':
          if(!filters.beginsWith(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'ends-with':
          if(!filters.endsWith(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'contains':
          if(!filters.contains(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'is-set':
          if(!filters.isSet(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
        case 'is-not-set':
          if(!filters.isNotSet(_.get(tx, action.attribute), action.value, action.filterType)) passed = false;
          break;
      }

    }

    return passed;

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

        if(!moment(a).isValid() || !_.isString(b) || _.isNaN(parseFloat(b, 10))) {
          return defaultReturn;
        }

        // For now lessThan /w a date is always relative and always in days.

        return moment(a).endOf('day').isAfter(moment().subtract(parseFloat(b, 10), 'days').startOf('day'));

      default: return defaultReturn
    }
  },
  absoluteLessThan: (a, b, type, defaultReturn = true) => {
    switch(type) {
      case 'date' :

      if(!moment(a).isValid() || !moment(b).isValid) {
        return defaultReturn;
      }

      return moment(a).isBefore(moment(b));
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

        // The amount of days is passed in as a string; too much work to get that converted
        // at a reducer level.
        if(!moment(a).isValid() || !_.isString(b) || _.isNaN(parseFloat(b, 10))) {
          return defaultReturn;
        }

        // For now greaterThan /w a date is always relative and always in days.
        return moment(a).endOf('day').isBefore(moment().subtract(parseFloat(b, 10), 'days').startOf('day'));

      default: return defaultReturn;
    }

    !_.isNumber(b) || a > b
  },
  absoluteGreaterThan: (a, b, type, defaultReturn = true) => {
    switch(type) {
      case 'date' :

      if(!moment(a).isValid() || !moment(b).isValid) {
        return defaultReturn;
      }

      return moment(a).isAfter(moment(b));
    }
  },
  // Only used for relative dates
  relativeEqualTo: (a, b, type, defaultReturn = true) => {
    switch(type) {
      case 'date':
        return moment(a).startOf('day').isSame(moment().subtract(parseFloat(b, 10), 'days').startOf('day'));
      default: return defaultReturn;
    }
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