import React, { Component } from 'react';

export default () => (
  <nav className="root-navigation flex--static">
    <div className="root-navigation__links">
      <a className="root-navigation__link root-navigation__link--active" href="#"><i className="fa fa-credit-card-alt"></i></a>
      <a className="root-navigation__link" href="#" onClick={() => true}><i className="fa fa-heart"></i></a>
    </div>
  </nav>
)
