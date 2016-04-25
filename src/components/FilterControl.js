import React, { Component } from 'react';

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

let FilterControl = (props) => {

  let {name, label, filter, onFilterChange, onFilterValueChange, dataChecked: filterEnabled, dataValue: filterValue, dataFilterType: filterType} = props;

  let filterChecked = props.filters[name] && props.filters[name].filter === filter.name;

  return (
    <div className="filter__control" key={name + '__' + filter.name}>
      <input name={name} id={name + '__' + filter.name} value={filter.name} onChange={onFilterChange} className="filter__control-radio" type="radio" checked={filterEnabled ? 'checked' : ''} data-type={filterType} />
      <label htmlFor={name + '__' + filter.name} className="filter__control-label">{filter.label}</label>
      {
        filter && filter.input &&
        <div className={'filter__control-value-wrapper ' + (filterChecked ? 'filter__control-value-wrapper--show' : '')}>
          {
            filter.input.prefix && <div className="filter__control-value-label">{filter.input.prefix}</div>
          }
          <input name={name + '__' + filter.name} className="filter__control-value-input" onBlur={onFilterValueChange} type={filter.input.type} placeholder={filterValue} data-type={filterType} />
          {
            filter.input.suffix && <div className="filter__control-value-label">{filter.input.suffix}</div>
          }
        </div>
      }
    </div>
  )
}

export default FilterControl;