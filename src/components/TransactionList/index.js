import React, { Component } from 'react';
import moment from 'moment'
import Big from 'big.js'

export default ({transactions}) => {
	return (
		<div className="transaction-list flex">
			<div className="transaction-list__scroll">
				<table className="transaction-list__table">
					<thead>
						<tr>
							<th className="transaction-list__header"></th>
							<th className="transaction-list__header">
								<span className="transaction-list__header-label">Description</span>
								<span className="transaction-list__header-ghost">Description</span>
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
							transactions.map( transaction => {

								let amount = Math.abs(parseFloat(Big(transaction.amount || 0).div('100').valueOf())).toFixed(2);
								let sign = transaction.amount <= 0 ? '-' : '';
								let type = transaction.amount <= 0 ? 'transaction-list__cell--debit' : 'transaction-list__cell--credit';

								return (
									<tr className="transaction-list__row" key={transaction.id}>
										<td className="transaction-list__cell">{transaction.merchant && transaction.merchant.logo && <img className="transaction-list__image" src={transaction.merchant.logo} height="20" width="20" />}</td>
										<td className="transaction-list__cell">{transaction.merchant && transaction.merchant.name || transaction.description}</td>
										<td className="transaction-list__cell">{moment(transaction.updated).format('dddd Do MMMM \'YY')}</td>
										<td className="transaction-list__cell">{transaction.merchant && transaction.merchant.address && transaction.merchant.address.formatted}</td>
										<td className="transaction-list__cell" style={{textTransform: 'capitalize'}}>{transaction.category.replace(/\_/g, ' ')}</td>
										<td className={"transaction-list__cell " + type} style={{'textAlign': 'right'}}>{sign}£{amount}</td>
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