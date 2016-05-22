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
            <Property name="created" label="Date and Time" type="date" />
            <Property name="_name" label="Description" type="string" />
            <Property name="merchant.address.formatted" label="Address" type="string" />
            <Property name="merchant.address.city" label="City" type="string" />
            <Property name="category" label="Category" type="string" />
          </ul>
        </div>
      </div>
    )
  }
}