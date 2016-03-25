import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

import Navigation from 'components/Navigation'
import ContextualNavigation from 'components/ContextualNavigation'
import ContextualTitle from 'components/ContextualTitle'
import Filters from 'components/Filters'
import Results from 'components/Filters'

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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
