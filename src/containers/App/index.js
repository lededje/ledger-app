import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import Navigation from 'components/Navigation'

/* global styles for app */
import './styles/app.scss';

const metaData = {
  title: 'Ledger',
  meta: {
    charset: 'utf-8'
  },
};

export default class App extends Component {

  render() {
    return (
      <section className="layout--horizontal flex">
        <DocumentMeta {...metaData} />
        <Navigation currentPathname={this.props.location.pathname} />
        {this.props.children}
      </section>
    );
  }
}
