import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/index';

/* global styles for app */
import './styles/app.scss';

import Navigation from 'components/Navigation'
import ContextualNavigation from 'components/ContextualNavigation'
import ContextualTitle from 'components/ContextualTitle'
import Filters from 'containers/Filters'
import TransactionList from 'components/TransactionList'

@connect(
  state => state.transactions,
  dispatch => bindActionCreators(actions, dispatch)
)

export class App extends Component {

  constructor (props) {
    super(props)

    fetch('/src/data/data.txt')
      .then((res) => res.json())
      .then((json) => json.transactions)
      .then(props.setTransactions)
      .catch(() => {
        alert('Error loading tx.');
      })
  }

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
