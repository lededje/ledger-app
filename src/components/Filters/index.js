import React, { Component } from 'react';

export default () => (
  <div className="filters">

    <div className="filters__options">
      <div className="select-box select-box--selected">
        All Tx
      </div>
      <div className="select-box">
        Match All filters
      </div>
    </div>

    <div className="filters__attributes">
      <div className="filters__title">Tx Data</div>

      <ul className="filters__list">
        <li className="filter">
          <label htmlFor="filter__amount" className="filter__label">
            Amount
          </label>
          <input id="filter__amount" className="filter__checkbox" type="checkbox" />
          <div className="filter__controls">
            <div className="filter__control">
              <label htmlFor="amount__greater-than" className="filter__control-label">greater than</label>
              <input id="amount__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__greater-than" className="filter__control-label">greater than</label>
              <input id="amount__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__greater-than" className="filter__control-label">greater than</label>
              <input id="amount__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__greater-than" className="filter__control-label">greater than</label>
              <input id="amount__greater-than" className="filter__control-radio" type="radio" />
            </div>
          </div>
        </li>
        <li className="filter">
          <label htmlFor="filter__created" className="filter__label">
            Created
          </label>
          <input id="filter__created" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__currency" className="filter__label">
            Currency
          </label>
          <input id="filter__currency" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__description" className="filter__label">
            Description
          </label>
          <input id="filter__description" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__city" className="filter__label">
            City
          </label>
          <input id="filter__city" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__country" className="filter__label">
            Country
          </label>
          <input id="filter__country" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__category" className="filter__label">
            Category
          </label>
          <input id="filter__category" className="filter__checkbox" type="checkbox" />
        </li>
        <li className="filter">
          <label htmlFor="filter__settled" className="filter__label">
            Settled
          </label>
          <input id="filter__settled" className="filter__checkbox" type="checkbox" />
        </li>
      </ul>
    </div>
  </div>
)
