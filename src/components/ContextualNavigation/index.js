import React, { Component } from 'react';

export default () => (
  <nav className="contextual-navigation">
      <a href="#" className="contextual-navigation__link contextual-navigation__link--active">
        All Transactions
      </a>
      <a href="#" className="contextual-navigation__link">
        Bills
      </a>
      <a href="#" className="contextual-navigation__link">
        Food
      </a>
      <a href="#" className="contextual-navigation__link">
        Clients
      </a>
      <a href="#" className="contextual-navigation__link">
        Expenses
      </a>
      <span className="contextual-navigation__seperator"></span>
      <a href="#" className="contextual-navigation__link">
        New Segment
      </a>
  </nav>
)
