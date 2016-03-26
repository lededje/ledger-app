import React, { Component } from 'react';

export default ({transactions}) => {
	return (
		<table className="transaction-list">
			<thead>
				<tr>
					<th className="transaction-list__header">Description</th>
					<th className="transaction-list__header">Date/Time</th>
					<th className="transaction-list__header">Location</th>
					<th className="transaction-list__header">Category</th>
					<th className="transaction-list__header">Amount</th>
					<th className="transaction-list__header">Tags</th>
				</tr>
			</thead>
			<tbody className="transaction-list__body">
				{
					transactions.map( transaction => (
						<tr className="transaction-list__row">
							<td className="transaction-list__cell">{transaction.merchant && transaction.merchant.name || transaction.description}</td>
							<td className="transaction-list__cell">{transaction.updated}</td>
							<td className="transaction-list__cell">{transaction.merchant && transaction.merchant.address && transaction.merchant.address.city}</td>
							<td className="transaction-list__cell">{transaction.category}</td>
							<td className="transaction-list__cell">{transaction.amount}</td>
							<td className="transaction-list__cell"></td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}