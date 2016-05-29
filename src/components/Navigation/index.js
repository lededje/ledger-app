import React, { Component } from 'react';

export default (props) => (
  <nav className="root-navigation flex--static">
    <div className="root-navigation__links">
      <a className={'root-navigation__link ' + (props.currentPathname === '/' ? 'root-navigation__link--active' : '')} href="#"><i className="fa fa-credit-card-alt"></i></a>
      <a className={'root-navigation__link ' + (props.currentPathname === '/love' ? 'root-navigation__link--active' : '')} href="/#/love"><i className="fa fa-heart"></i></a>
    </div>
  </nav>
)