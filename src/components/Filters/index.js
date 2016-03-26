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
          <input id="filter__amount" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__amount" className="filter__label">
            Amount
          </label>
        </li>
        <li className="filter">
          <input id="filter__created" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__created" className="filter__label">
            Created
          </label>
        </li>
        <li className="filter">
          <input id="filter__currency" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__currency" className="filter__label">
            Currency
          </label>
        </li>
        <li className="filter">
          <input id="filter__description" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__description" className="filter__label">
            Description
          </label>
        </li>
        <li className="filter">
          <input id="filter__city" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__city" className="filter__label">
            City
          </label>
        </li>
        <li className="filter">
          <input id="filter__country" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__country" className="filter__label">
            Country
          </label>
        </li>
        <li className="filter">
          <input id="filter__category" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__category" className="filter__label">
            Category
          </label>
        </li>
        <li className="filter">
          <input id="filter__settled" className="filter__checkbox" type="checkbox" />
          <label htmlFor="filter__settled" className="filter__label">
            Settled
          </label>
        </li>
      </ul>
    </div>
  </div>
)
