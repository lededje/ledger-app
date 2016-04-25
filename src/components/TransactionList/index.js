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
    return {filters: state.filters}
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class TransactionList extends Component {

	setFilter (e) {

		let target = e.target;

		let attribute = target.dataset.attribute;
		let value = target.dataset.value;

		this.props.setFilter(attribute, 'is', value);
	}

	render () {

		let {transactions} = this.props;

		const filterActions = _.map(this.props.filters, (filter, attribute) => {
			return {
				attribute,
				...filter
			}
		});

		const filteredTx = transactionsFilter(transactions, filterActions);

		return (
			<div className="transaction-list flex">
				<div className="transaction-list__scroll">
					<table className="transaction-list__table">
						<thead>
							<tr>
								<th className="transaction-list__header"></th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Merchant</span>
									<span className="transaction-list__header-ghost">Merchant</span>
								</th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Date/Time</span>
									<span className="transaction-list__header-ghost">Date/Time</span>
								</th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Location</span>
									<span className="transaction-list__header-ghost">Location</span>
								</th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Category</span>
									<span className="transaction-list__header-ghost">Category</span>
								</th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Amount</span>
									<span className="transaction-list__header-ghost">Amount</span>
								</th>
								<th className="transaction-list__header">
									<span className="transaction-list__header-label">Tags</span>
									<span className="transaction-list__header-ghost">Tags</span>
								</th>
							</tr>
						</thead>
						<tbody className="transaction-list__body">
							{
								filteredTx.map( transaction => {

									let amount = Math.abs(parseFloat(Big(transaction.amount || 0).div('100').valueOf())).toFixed(2);
									let localAmount = Math.abs(parseFloat(Big(transaction.local_amount || 0).div('100').valueOf())).toFixed(2);

									let sign = transaction.amount <= 0 ? '-' : '';
									let type = transaction.amount <= 0 ? 'transaction-list__cell--debit' : 'transaction-list__cell--credit';
									let desc = transaction.merchant && transaction.merchant.name || ''; //transaction.description;

									return (
										<tr className="transaction-list__row" key={transaction.id}>
											<td className="transaction-list__cell transaction-list__cell--slim">
												<input className="transaction-list__select-input" type="checkbox" />
												{
													transaction.merchant && transaction.merchant.logo && <img className="transaction-list__image" src={transaction.merchant.logo} height="20" width="20" />
													||
													<span className="transaction-list__no-image" style={{backgroundColor: intToMaterialColor(hashString(desc))}}>{desc.substr(0, 1).toUpperCase()}</span>
												}
											</td>
											<td className="transaction-list__cell transaction-list__cell--filterable">
												{desc}
												<span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter" data-attribute="description" data-value={desc}></span>
											</td>
											<td className="transaction-list__cell transaction-list__cell--filterable">
												{moment(transaction.updated).format('dddd Do MMMM \'YY')}
												<span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter"></span>
											</td>
											<td className="transaction-list__cell transaction-list__cell--filterable">
												{transaction.merchant && transaction.merchant.address && transaction.merchant.address.formatted}
												<span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter"></span>
											</td>
											<td className="transaction-list__cell transaction-list__cell--filterable" style={{textTransform: 'capitalize'}}>
												{transaction.category.replace(/\_/g, ' ')}
												<span onClick={this.setFilter.bind(this)} className="transaction-list__hot-filter fa fa-filter"></span>
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