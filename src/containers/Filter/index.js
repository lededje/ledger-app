import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/index';

@connect(
  state => state.filters,
  dispatch => bindActionCreators(actions, dispatch)
)

// attribute: {
//   name: 'amount',
//   label: 'Amount',
//   type: 'number',
//   filter: {
//     name: 'greater-than',
//     label: 'Greater Than',
//     input: {
//       type: 'number',
//       prefix: 'lorem',
//       suffix: 'ipsum',
//     }
//   }
// }

export default class Filter extends Component {

  onAttributeChange(e) {
    let input, name;

    input = e.target;
    name = input.name;

    if(input.checked) {
      this.props.setFilter(name);
    } else {
      this.props.unsetFilter(name);
    }

  }

  render () {
    let {name, label, type} = this.props;

    return (
      <li className="filter">
        <label htmlFor={'filter__' + name} className="filter__label">{label}</label>
        <input name={name} id={'filter__' + name} onChange={this.onAttributeChange.bind(this)} className="filter__checkbox" type="checkbox"/>
        <div className="filter__controls">
          {
            types[type] && types[type] && types[type].map( filterConfig => {

              let attributes;

              // A bundled blob of attributes and filter details for the filter
              // components to use
              attributes = {
                name,
                label,
                filter: {
                  ...filterConfig
                }
              };

              return <filterConfig.component {...attributes} />
            })
          }
        </div>
      </li>
    );
  }
}

let Control = ({name, label, filter}) => {

  return (
    <div className="filter__control" key={name + '__' + filter.name}>
      <input name={name} id={name + '__' + filter.name} value={filter.name} onChange={onFilterChange} className="filter__control-radio" type="radio" />
      <label htmlFor={name + '__' + filter.name} className="filter__control-label">{filter.label}</label>
      {
        filter && filter.input &&
        <div className="filter__control-value-wrapper">
          {
            filter.input.prefix && <div className="filter__control-value-label">{filter.input.prefix}</div>
          }
          <input name={name + '__' + filter.name} className="filter__control-value-input" onChange={onFilterValueChange} type={filter.input.type}/>
          {
            filter.input.suffix && <div className="filter__control-value-label">{filter.input.suffix}</div>
          }
        </div>
      }
    </div>
  )
}

let Label = ({label}) => (
  <div className="filter__controls-label">{label}</div>
)

function onFilterChange(e) {
  let input, name, filter;

  input = e.target;
  name = input.name.replace('__filter', '');
  filter = input.value;
}

function onFilterValueChange(e) {
  let input, name, filter, value;

  input = e.target;
  name = input.name.split('__')[0];
  filter = input.name.split('__')[1];
  value = input.value;
}

let types = {
  number: [
    {
      component: Control,
      label: 'greater than',
      name: 'greater-than',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'less than',
      name: 'less-than',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is',
      name: 'is',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is not',
      name: 'is-not',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is known',
      name: 'is-known'
    },
    {
      component: Control,
      label: 'is unknown',
      name: 'is-unknown'
    }
  ],
  string: [
    {
      component: Control,
      label: 'is',
      name: 'is',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'is not',
      name: 'is-not',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'starts with',
      name: 'starts-with',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'ends with',
      name: 'ends-with',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'contains',
      name: 'contains',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'does not contain',
      name: 'does-not-contain',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'is unknown',
      name: 'is-unknown'
    },
    {
      component: Control,
      label: 'has any value',
      name: 'has-any-value'
    }
  ],
  boolean: [
    {
      component: Control,
      label: 'is true',
      name: 'is-true'
    },
    {
      component: Control,
      label: 'is false',
      name: 'is-false'
    },
    {
      component: Control,
      label: 'is unknown',
      name: 'is-unknown'
    },
    {
      component: Control,
      label: 'has any value',
      name: 'has-any-value'
    }
  ],
  date: [
    {
      component: Label,
      label: 'Relative'
    },
    {
      component: Control,
      label: 'more than',
      name: 'more-than',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: Control,
      label: 'exactly',
      name: 'exactly',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: Control,
      label: 'less than',
      name: 'less-than',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: Label,
      label: 'Absolute'
    },
    {
      component: Control,
      label: 'after',
      name: 'after',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'on',
      name: 'on',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'before',
      name: 'before',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'is known',
      name: 'is-known'
    },
    {
      component: Control,
      label: 'is unknown',
      name: 'is-unknown'
    }
  ]
};