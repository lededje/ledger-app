import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

import Navigation from 'components/Navigation'
import ContextualNavigation from 'components/ContextualNavigation'
import Filters from 'components/Filters'
import Results from 'components/Filters'

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section className="wrapper">
        <Navigation />
        <div className="main" >
          <ContextualNavigation />
          <div>
            <Filters />
            <Results />
          </div>
        </div>
      </section>
    );
  }
}
