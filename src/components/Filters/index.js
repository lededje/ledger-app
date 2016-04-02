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
              <input name="amount" id="amount__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__less-than" className="filter__control-label">less than</label>
              <input name="amount" id="amount__less-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__is" className="filter__control-label">is</label>
              <input name="amount" id="amount__is" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__is-not" className="filter__control-label">is not</label>
              <input name="amount" id="amount__is-not" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__is-unknown" className="filter__control-label">is unknown</label>
              <input name="amount" id="amount__is-unknown" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="amount__has-any-value" className="filter__control-label">has any value</label>
              <input name="amount" id="amount__has-any-value" className="filter__control-radio" type="radio" />
            </div>
          </div>
        </li>
        <li className="filter">
          <label htmlFor="filter__created" className="filter__label">
            Created
          </label>
          <input id="filter__created" className="filter__checkbox" type="checkbox" />
           <div className="filter__controls">
            <div className="filter__control">
              <label htmlFor="created__greater-than" className="filter__control-label">greater than</label>
              <input name="created" id="created__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="created__less-than" className="filter__control-label">less than</label>
              <input name="created" id="created__less-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="created__is" className="filter__control-label">is</label>
              <input name="created" id="created__is" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="created__is-not" className="filter__control-label">is not</label>
              <input name="created" id="created__is-not" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="created__is-unknown" className="filter__control-label">is unknown</label>
              <input name="created" id="created__is-unknown" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="created__has-any-value" className="filter__control-label">has any value</label>
              <input name="created" id="created__has-any-value" className="filter__control-radio" type="radio" />
            </div>
          </div>
        </li>
        <li className="filter">
          <label htmlFor="filter__currency" className="filter__label">
            Currency
          </label>
          <input id="filter__currency" className="filter__checkbox" type="checkbox" />
           <div className="filter__controls">
            <div className="filter__control">
              <label htmlFor="currency__greater-than" className="filter__control-label">greater than</label>
              <input name="currency" id="currency__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="currency__less-than" className="filter__control-label">less than</label>
              <input name="currency" id="currency__less-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="currency__is" className="filter__control-label">is</label>
              <input name="currency" id="currency__is" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="currency__is-not" className="filter__control-label">is not</label>
              <input name="currency" id="currency__is-not" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="currency__is-unknown" className="filter__control-label">is unknown</label>
              <input name="currency" id="currency__is-unknown" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="currency__has-any-value" className="filter__control-label">has any value</label>
              <input name="currency" id="currency__has-any-value" className="filter__control-radio" type="radio" />
            </div>
          </div>
        </li>
        <li className="filter">
          <label htmlFor="filter__description" className="filter__label">
            Description
          </label>
          <input id="filter__description" className="filter__checkbox" type="checkbox" />
           <div className="filter__controls">
            <div className="filter__control">
              <label htmlFor="amount__greater-than" className="filter__control-label">greater than</label>
              <input name="description" id="description__greater-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="description__less-than" className="filter__control-label">less than</label>
              <input name="description" id="description__less-than" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="description__is" className="filter__control-label">is</label>
              <input name="description" id="description__is" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="description__is-not" className="filter__control-label">is not</label>
              <input name="description" id="description__is-not" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="description__is-unknown" className="filter__control-label">is unknown</label>
              <input name="description" id="description__is-unknown" className="filter__control-radio" type="radio" />
            </div>
            <div className="filter__control">
              <label htmlFor="description__has-any-value" className="filter__control-label">has any value</label>
              <input name="description" id="description__has-any-value" className="filter__control-radio" type="radio" />
            </div>
          </div>
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
