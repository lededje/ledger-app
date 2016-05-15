import React, { Component } from 'react';
import moment from 'moment';

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

export default class FilterControl extends Component {

  constructor (props) {
    super(props);

    this.state = {
      filterValue: props.filterValue || ''
    };
  }

  componentWillReceiveProps ({dataValue: filterValue, dataFilterType: filterType}) {

    switch(filterType) {
      case 'date':
        this.setState({
          filterValue: moment(filterValue).format('YYYY-MM-DD')
        });
        break;
      default:
        this.setState({
          filterValue: filterValue
        });
        break;
    }

  }

  handleChange (event) {
    this.setState({filterValue: event.target.value});
  }

  render() {

    // console.log('rendering...', this.state.filterValue);

    let {name, label, filter, onFilterChange, onFilterValueChange, dataChecked: filterEnabled, dataValue: filterValue, dataFilterType: filterType} = this.props;
    let filterChecked = this.props.filters[name] && this.props.filters[name].filter === filter.name;

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
            <input name={name + '__' + filter.name} className="filter__control-value-input" onBlur={onFilterValueChange} type={filter.input.type} value={this.state.filterValue} data-type={filterType} onChange={this.handleChange.bind(this)} />
            {
              filter.input.suffix && <div className="filter__control-value-label">{filter.input.suffix}</div>
            }
          </div>
        }
      </div>
    )
  }
}