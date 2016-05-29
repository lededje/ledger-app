import React, { Component } from 'react';

export default () => (
  <nav className="root-navigation flex--static">
    <div className="root-navigation__links">
      <a className="root-navigation__link root-navigation__link--active" href="#"><i className="fa fa-credit-card-alt"></i></a>
      <a className="root-navigation__link" href="#" onClick={
      	() => {
      		window.ga('send', 'event', 'love', 'click');
      		alert('Thanks for showing interest. More features to come, including segments, alerts and more.');
      	}
      }><i className="fa fa-heart"></i></a>
    </div>
  </nav>
)
