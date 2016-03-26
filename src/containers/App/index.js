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
      <section className="wrapper wrapper--horizontal wrapper__root">
        <Navigation />
        <div className="main wrapper wrapper--vertical wrapper__full-flex" >
          <ContextualNavigation />
          <div className="wrapper wrapper__full-flex">
            <div className="contextual-side-navigation">
              <Filters />
            </div>
            <div className="main-detail wrapper__full-flex">
              <ContextualTitle />
              <div className="container">
                <TransactionList {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
