import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import filterTypes from 'utils/filterTypes';

import * as actions from 'actions/index';

import _ from 'lodash';

@connect(
  state => {
    return {filters: state.filters}
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class Property extends Component {

  onPropertyToggle (e) {
    let checked = e.target.checked;

    if(checked) {
      this.props.setFilter(this.props.name)
    } else {
      this.props.unsetFilter(this.props.name)
    }
  }

  onFilterToggle (e) {

    let checked = e.target.checked;
    let property = e.target.name;
    let filter = e.target.value;
    let filterType = e.target.dataset.type;

    this.props.setFilter(property, filter, filterType);
  }

  onFilterValueChange (e) {

    let property = e.target.name.split('__')[0]
    let filter = e.target.name.split('__')[1]
    let value = e.target.value;
    let filterType = e.target.dataset.type;

    // TODO: Move this to the reducer.
    if(filterType === 'money' || filterType === 'number') {
      value = _.isNaN(parseInt(value, 10)) ? undefined : parseInt(value, 10);
    }

    this.props.setFilter(property, filter, filterType, value);

  }

  render () {

    let {name, label, type} = this.props;

    // Should the checkbox that relates to this property be active:
    let propertyActive = typeof this.props.filters[name] === 'object';

    let propertyEnabled = _.has(this.props.filters, name);

    return (
      <li key={'property__' + name} className="property">
        <input name={name} id={'property__' + name} className="property__checkbox" type="checkbox" checked={propertyEnabled === true ? 'checked' : ''} onChange={this.onPropertyToggle.bind(this)} />
        <label htmlFor={'property__' + name} className="property__label">{label}</label>
        <div className={'property__controls ' + (propertyEnabled ? 'property__controls--show' : '')}>
          {
            filterTypes[type] && filterTypes[type].map(filter => {

              let filterEnabled = _.has(this.props.filters, name) &&  this.props.filters[name].filter === filter.name;
              let filterValue = filterEnabled ? this.props.filters[name].value : '';

              return <filter.component name={name} label={label} filter={filter} filters={this.props.filters} onFilterChange={this.onFilterToggle.bind(this)} onFilterValueChange={this.onFilterValueChange.bind(this)} dataChecked={filterEnabled} dataValue={filterValue} dataFilterType={type}/>
            })
          }
        </div>
      </li>
    );
  }
}