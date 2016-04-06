import React, { Component } from 'react';

import Filter from 'containers/Filter';

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
            <Filter name="amount" label="Amount" type="number" />
            <Filter name="created" label="Created" type="date" />
            <Filter name="currency" label="Currency" type="string" />
            <Filter name="description" label="Description" type="string" />
            <Filter name="city" label="City" type="string" />
            <Filter name="category" label="Category" type="string" />
            <Filter name="settled" label="Settled" type="boolean" />
          </ul>
        </div>
      </div>
    )
  }
}