import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/index';

import Filter from 'components/Filter';

@connect(
  state => state.transactions,
  dispatch => bindActionCreators(actions, dispatch)
)

export default class App extends Component {
  render() {
    return (<div className="filters">

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
          <Filter name="Amount" type="number" />
          <Filter name="Created" type="date" />
          <Filter name="Currency" type="string" />
          <Filter name="Description" type="string" />
          <Filter name="City" type="string" />
          <Filter name="Category" type="string" />
          <Filter name="Settled" type="boolean" />
        </ul>
      </div>
    </div>
  )
  }
}