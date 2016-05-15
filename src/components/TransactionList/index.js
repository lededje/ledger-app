import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/index';

import moment from 'moment'
import Big from 'big.js'
import hashString from 'utils/hashString';
import intToMaterialColor from 'utils/intToMaterialColor';
import getSymbol from 'currency-symbol-map'

import _ from 'lodash';

import transactionsFilter from 'utils/transactionsFilter';

@connect(
  state => {
    return {filters: state.filters, sorting: state.sorting}
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class TransactionList extends Component {

  setFilter (e) {
    let target = e.target;
    let {attribute, filter, filterType} = target.dataset;
    let value = target.dataset.value;

    this.props.setFilter(attribute, filter, filterType, value);
  }

  setSortBy (e) {
    let target = e.target;
    let {sortAttribute, sortType} = target.dataset;

    this.props.setSortOrder(sortAttribute, sortType);

  }

  render () {

    let {transactions} = this.props;

    const filterActions = _.map(this.props.filters, (filter, attribute) => {
      return {
        attribute,
        ...filter
      }
    });

    const sortingOptions = this.props.sorting

    const filteredTx = transactionsFilter(transactions, filterActions, sortingOptions);


    const headers = [
      {
        label: 'Merchant',
        sortAttribute: 'merchant.name',
        sortType: 'string'
      },
      {
        label: 'Date/Time',
        sortAttribute: 'created',
        sortType: 'date'
      },
      {
        label: 'Location'
      },
      {
        label: 'Category',
        sortAttribute: 'category',
        sortType: 'string'
      },
      {
        label: 'Amount',
        sortAttribute: 'local_amount',
        sortType: 'number'
      }, {
        label: 'Tags',
      }
    ].map((header) => {
      if(header.sortAttribute === this.props.sorting.property) {
        return {
          ...header,
          active: true,
          ascending: this.props.sorting.ascending ? 'asc' : 'desc'
        }
      }

      return header
    });


    return (
      <div className="transaction-list flex">
        <div className="transaction-list__scroll">
          <table className="transaction-list__table">
            <thead>
              <tr>
                <th className="transaction-list__header"></th>
                {
                  headers.map((header) => {
                    return (
                      <th key={header.label} className="transaction-list__header">
                        <span
                          className={'transaction-list__header-label' + (header.active ? ' transaction-list__header-label--order-' + header.ascending : '') + (header.sortAttribute ? ' transaction-list__header-label--clickable': '')}
                          data-sort-attribute={header.sortAttribute}
                          data-sort-type={header.sortType}
                          onClick={header.sortAttribute ? this.setSortBy.bind(this) : (() => {})}
                        >
                          {header.label}
                        </span>
                        <span className="transaction-list__header-ghost">{header.label}</span>
                      </th>
                    );
                  })
                }
              </tr>
            </thead>
            <tbody className="transaction-list__body">
              {
                filteredTx.map( transaction => {

                  let amount = Math.abs(parseFloat(Big(transaction.amount || 0).div('100').valueOf())).toFixed(2);
                  let localAmount = Math.abs(parseFloat(Big(transaction.local_amount || 0).div('100').valueOf())).toFixed(2);

                  let sign = transaction.amount <= 0 ? '-' : '';
                  let type = transaction.amount <= 0 ? 'transaction-list__cell--debit' : 'transaction-list__cell--credit';
                  let desc = transaction.merchant && transaction.merchant.name || transaction.description;

                  return (
                    <tr className="transaction-list__row" key={transaction.id}>
                      <td className="transaction-list__cell transaction-list__cell--slim">
                        {
                          transaction.merchant && transaction.merchant.logo && <img className="transaction-list__image" src={transaction.merchant.logo} height="20" width="20" />
                          ||
                          <span className="transaction-list__no-image" style={{backgroundColor: intToMaterialColor(hashString(desc))}}>{desc.substr(0, 1).toUpperCase()}</span>
                        }
                      </td>
                      <td className="transaction-list__cell transaction-list__cell--filterable">
                        {desc}
                        <span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter" data-attribute="merchant.name" data-filter="equal-to" data-filter-type="string" data-value={desc}></span>
                      </td>
                      <td className="transaction-list__cell transaction-list__cell--filterable">
                        {moment(transaction.created).format('ddd Do MMM \'YY')}
                        <span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter" data-attribute="created" data-filter="equal-to" data-filter-type="date" data-value={transaction.updated}></span>
                      </td>
                      <td className="transaction-list__cell transaction-list__cell--filterable">
                        {transaction.merchant && transaction.merchant.address && transaction.merchant.address.formatted}
                        {transaction.merchant && transaction.merchant.address &&
                          <span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter" data-attribute="merchant.address.city" data-filter="equal-to" data-filter-type="string" data-value={transaction.merchant.address.city}></span>
                        }
                      </td>
                      <td className="transaction-list__cell transaction-list__cell--filterable" style={{textTransform: 'capitalize'}}>
                        {transaction.category.replace(/\_/g, ' ')}
                        <span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter" data-attribute="category" data-filter="equal-to" data-filter-type="string" data-value={transaction.category}></span>
                      </td>
                      <td className={"transaction-list__cell " + type} style={{'textAlign': 'right'}}>
                        {sign}£{amount}
                        {
                          amount !== localAmount
                          ? <div><small>{(sign + getSymbol(transaction.local_currency) + localAmount)}</small></div>
                            : ''
                        }
                      </td>
                      <td className="transaction-list__cell"></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}