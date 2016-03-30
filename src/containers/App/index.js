import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as transactionActions from 'actions/transaction';

/* global styles for app */
import './styles/app.scss';

import Navigation from 'components/Navigation'
import ContextualNavigation from 'components/ContextualNavigation'
import ContextualTitle from 'components/ContextualTitle'
import Filters from 'components/Filters'
import TransactionList from 'components/TransactionList'

@connect(
  state => state.transactions,
  dispatch => bindActionCreators(transactionActions, dispatch)
)

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section className="layout--horizontal flex">
        <Navigation />
        <div className="main layout--vertical flex" >
          <ContextualNavigation/>
          <div className="layout--horizontal flex">
            <div className="contextual-side-navigation flex--static">
              <Filters />
            </div>
            <div className="main-detail layout--vertical flex">
              <ContextualTitle {...this.props} />
              <TransactionList {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
