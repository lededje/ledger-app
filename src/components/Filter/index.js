import React, { Component } from 'react';

export default ({...args}) => (
  <li className="filter">
    <label htmlFor={'filter__' + args.name} className="filter__label">
      {args.name}
    </label>
    <input id={'filter__' + args.name} className="filter__checkbox" type="checkbox"/>
    <div className="filter__controls">
      {
        types[args.type] && types[args.type] && types[args.type].map( filterConfig => {
          return <filterConfig.component {...Object.assign({}, args, filterConfig)} />
        }
        )
      }
    </div>
  </li>
)

//    control: {
//      input: {
//        prefix: 'days old',
//        suffix: undefined,
//        type*: 'number'
//      },
//      label*: 'More than',
//      name*: 'created'
//      type*: 'more-than'
//    }

let Control = ({label, input, name, type}) => {

  let dashedName = name.toLowerCase().replace(/\ /g, '-');

  return (
    <div className="filter__control">
      <input name={dashedName} id={dashedName + '__' + type} className="filter__control-radio" type="radio" />
      <label htmlFor={dashedName + '__' + type} className="filter__control-label">{label}</label>
      {
        input &&
        <div className="filter__control-value-wrapper">
          {
            input.prefix && <div className="filter__control-value-label">{input.prefix}</div>
          }
          <input className="filter__control-value-input" type={input.type}/>
          {
            input.suffix && <div className="filter__control-value-label">{input.suffix}</div>
          }
        </div>
      }
    </div>
  )
}

let Label = ({label}) => (
  <div className="filter__controls-label">{label}</div>
)

let types = {
  number: [
    {
      component: Control,
      label: 'greater than',
      type: 'greater-than',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'less than',
      type: 'less-than',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is',
      type: 'is',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is not',
      type: 'is-not',
      input: {
        type: 'number'
      }
    },
    {
      component: Control,
      label: 'is known',
      type: 'is-known'
    },
    {
      component: Control,
      label: 'is unknown',
      type: 'is-unknown'
    }
  ],
  string: [
    {
      component: Control,
      label: 'is',
      type: 'is',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'is not',
      type: 'is-not',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'starts with',
      type: 'starts-with',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'ends with',
      type: 'ends-with',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'contains',
      type: 'contains',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'does not contain',
      type: 'does-not-contain',
      input: {
        type: 'text'
      }
    },
    {
      component: Control,
      label: 'is unknown',
      type: 'is-unknown'
    },
    {
      component: Control,
      label: 'has any value',
      type: 'has-any-value'
    }
  ],
  boolean: [
    {
      component: Control,
      label: 'is true',
      type: 'is-true'
    },
    {
      component: Control,
      label: 'is false',
      type: 'is-false'
    },
    {
      component: Control,
      label: 'is unknown',
      type: 'is-unknown'
    },
    {
      component: Control,
      label: 'has any value',
      type: 'has-any-value'
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
      type: 'more-than',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: Control,
      label: 'exactly',
      type: 'exactly',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: Control,
      label: 'less than',
      type: 'less-than',
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
      type: 'after',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'on',
      type: 'on',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'before',
      type: 'before',
      input: {
        type: 'date'
      }
    },
    {
      component: Control,
      label: 'is known',
      type: 'is-known'
    },
    {
      component: Control,
      label: 'is unknown',
      type: 'is-unknown'
    }
  ]
};