import React, { Component } from 'react';

import Property from 'containers/Property';

export default class App extends Component {
  render() {
    return (
      <div className="filters">
        <div className="filters__options">
          <div className="select-box select-box--selected">
            All Tx
          </div>
          <div className="select-box">
            Match All filters
          </div>
        </div>

        <div className="filters__attributes">
          <div className="filters__title">Tx Data</div>

          <ul className="filters__list">
            <Property name="amount" label="Amount" type="money" />
            <Property name="created" label="Created" type="date" />
            <Property name="currency" label="Currency" type="string" />
            <Property name="merchant.name" label="Merchant" type="string" />
            <Property name="city" label="City" type="string" />
            <Property name="category" label="Category" type="string" />
            <Property name="settled" label="Settled" type="boolean" />
          </ul>
        </div>
      </div>
    )
  }
}