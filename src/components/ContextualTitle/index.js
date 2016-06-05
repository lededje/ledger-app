import React, { Component } from 'react';
import filterHelper from 'utils/filterHelper';


export default ({transactions, filters, sorting}) => {
  const tx = filterHelper(transactions, filters, sorting);
  return (
  	<header className="contextual-title flex--static">
  		<span className="contextual-title__title">{tx.length}&nbsp;transactions</span>
      <a className="contextual-title__text-link" target="_blank" href={'data:application/json;charset=utf-8,'+ JSON.stringify(tx)}>Download</a>
  	</header>
  )
}