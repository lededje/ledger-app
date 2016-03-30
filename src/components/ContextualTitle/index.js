import React, { Component } from 'react';

export default ({transactions}) => (
	<header className="contextual-title flex--static">
		{transactions.length} transactions
	</header>
)