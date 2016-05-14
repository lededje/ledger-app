import expect from 'expect';
import transactionsFilter from 'utils/transactionsFilter';

import { filters } from 'utils/transactionsFilter'

import lolex from 'lolex';

import moment from 'moment';

import _ from 'lodash';

describe('Transactions filters', () => {

  describe('Less than', () => {

    describe('number and money', () => {
      it('should return the defaultReturn if any of the arguments passed are not numbers', () => {
        expect(filters.lessThan(0, undefined, 'number')).toEqual(true);
        expect(filters.lessThan('lorem', 0, 'number')).toEqual(true);
        expect(filters.lessThan('lorem', NaN, 'money')).toEqual(true);
      });
    });

    it('should return the defaultReturn if a type is passed which is unknown', () => {
      expect(filters.lessThan(0, 1, undefined)).toEqual(true);
      expect(filters.lessThan(0, 1, undefined, false)).toEqual(false);
      expect(filters.lessThan(0, 1, 'unknown_type')).toEqual(true);
    });

    it('should correctly return if the a is < b', () => {
      expect(filters.lessThan(0, 10, 'number')).toEqual(true);
      expect(filters.lessThan(15, 10, 'number')).toEqual(false);

      const clock = lolex.install(new Date('2016-05-16T19:33:30Z').getTime());

      // The date is Sat May 15 2016 19:41:41 GMT+0100 (BST)
      // is a less than b days ago?

      expect(filters.lessThan('2016-05-06T00:00:00Z', 10, 'date')).toEqual(true);
      expect(filters.lessThan('2016-05-11T00:00:00Z', 10, 'date')).toEqual(true);
      expect(filters.lessThan('2016-05-16T19:33:29Z', 10, 'date')).toEqual(true);

      clock.uninstall();

    });
  });

  describe('Greater than', () => {

    describe('number and money', () => {
      it('should return the defaultReturn if any of the arguments passed are not numbers', () => {
        expect(filters.greaterThan(0, undefined, 'number')).toEqual(true);
        expect(filters.greaterThan('lorem', 0, 'number')).toEqual(true);
        expect(filters.greaterThan('lorem', NaN, 'money')).toEqual(true);
      });
    });

    it('should return the defaultReturn if a type is passed which is unknown', () => {
      expect(filters.greaterThan(0, 1, undefined)).toEqual(true);
      expect(filters.greaterThan(0, 1, undefined, false)).toEqual(false);
      expect(filters.greaterThan(0, 1, 'unknown_type')).toEqual(true);
    });

    it('should correctly return if the a is > b', () => {
      expect(filters.greaterThan(0, 10, 'number')).toEqual(false);
      expect(filters.greaterThan(15, 10, 'number')).toEqual(true);

      const clock = lolex.install(new Date('2016-05-16T19:33:30Z').getTime());

      // The date is Sat May 15 2016 19:41:41 GMT+0100 (BST)
      // is a greater than b days ago?

      expect(filters.greaterThan('2016-05-05T00:00:00Z', 10, 'date')).toEqual(true);
      expect(filters.greaterThan('2016-05-16T00:00:00Z', 10, 'date')).toEqual(false);

      clock.uninstall();

    });
  });

  describe('Equal to', () => {
    it('should return true if a === b', () => {
      expect(filters.equalTo(1, 3, 'number')).toEqual(false);
      expect(filters.equalTo(5, 5, 'number')).toEqual(true);
      expect(filters.equalTo('lorem', 'lorem', 'string')).toEqual(true);
      expect(filters.equalTo('dolor', 'amet', 'string')).toEqual(false);
      // Dates are floored by day.
      expect(filters.equalTo('2016-05-05T00:00:00Z', '2016-05-05T04:30:00Z', 'date')).toEqual(true);
      expect(filters.equalTo('2016-05-05T00:00:00Z', '2016-09-05T04:30:00Z', 'date')).toEqual(false);
    });
  });

  describe('Not Equal to', () => {
    it('should return true if a !== b', () => {
      expect(filters.notEqualTo(1, 3, 'number')).toEqual(true);
      expect(filters.notEqualTo(5, 5, 'number')).toEqual(false);
      expect(filters.notEqualTo('lorem', 'lorem', 'string')).toEqual(false);
      expect(filters.notEqualTo('dolor', 'amet', 'string')).toEqual(true);
      // Dates are floored by day.
      expect(filters.notEqualTo('2016-05-05T00:00:00Z', '2016-05-05T04:30:00Z', 'date')).toEqual(false);
      expect(filters.notEqualTo('2016-05-05T00:00:00Z', '2016-09-05T04:30:00Z', 'date')).toEqual(true);
    });
  });

  describe('Is True', () => {
    it('should return true if a is === true', () => {
      expect(filters.isTrue(true)).toEqual(true);
      expect(filters.isTrue(false)).toEqual(false);
      expect(filters.isTrue(null)).toEqual(false);
      expect(filters.isTrue('null')).toEqual(false);
      expect(filters.isTrue()).toEqual(false);
      expect(filters.isTrue(NaN)).toEqual(false);
      expect(filters.isTrue(1)).toEqual(false);
    });
  });

  describe('Is False', () => {
    it('should return true if a is === false', () => {
      expect(filters.isFalse(false)).toEqual(true);
      expect(filters.isFalse(true)).toEqual(false);
      expect(filters.isFalse(null)).toEqual(false);
      expect(filters.isFalse('null')).toEqual(false);
      expect(filters.isFalse()).toEqual(false);
      expect(filters.isFalse(NaN)).toEqual(false);
      expect(filters.isFalse(1)).toEqual(false);
    });
  });

  describe('Begins With', () => {
    it('should correctly test strings', () => {
      expect(filters.beginsWith('lorem', 'lore')).toEqual(true);
      expect(filters.beginsWith('lorem', 'orem')).toEqual(false);
    });

    it('should return defaultReturn if the arguments are not strings', () => {
      expect(filters.beginsWith(134134, undefined)).toEqual(true);
      expect(filters.beginsWith('134134', undefined)).toEqual(true);
      expect(filters.beginsWith(null, undefined)).toEqual(true);
      expect(filters.beginsWith(NaN, undefined)).toEqual(true);
    });
  });

  describe('Ends With', () => {
    it('should correctly test strings', () => {
      expect(filters.endsWith('lorem', 'orem')).toEqual(true);
      expect(filters.endsWith('lorem', 'lore')).toEqual(false);
    });

    it('should return defaultReturn if the arguments are not strings', () => {
      expect(filters.endsWith(134134, undefined)).toEqual(true);
      expect(filters.endsWith('134134', undefined)).toEqual(true);
      expect(filters.endsWith(null, undefined)).toEqual(true);
      expect(filters.endsWith(NaN, undefined)).toEqual(true);
    });
  });

 describe('Contains', () => {
    it('should correctly test strings', () => {
      expect(filters.contains('lorem', 'orem')).toEqual(true);
      expect(filters.contains('lorem', 'lore')).toEqual(true);
      expect(filters.contains('lorem', 'ore')).toEqual(true);
    });

    it('should return defaultReturn if the arguments are not strings', () => {
      expect(filters.contains(134134, undefined)).toEqual(true);
      expect(filters.contains('134134', undefined)).toEqual(true);
      expect(filters.contains(null, undefined)).toEqual(true);
      expect(filters.contains(NaN, undefined)).toEqual(true);
    });
  });

 describe('Is Set', () => {
  it('should return true if the argument is not undefined', () => {
    expect(filters.isSet('lorem')).toEqual(true);
    expect(filters.isSet(NaN)).toEqual(true);
    expect(filters.isSet(0)).toEqual(true);
    expect(filters.isSet(undefined)).toEqual(false);
    expect(filters.isSet(null)).toEqual(false);
  });
 });

 describe('Is Not Set', () => {
  it('should return true if the argument is not undefined', () => {
    expect(filters.isNotSet('lorem')).toEqual(false);
    expect(filters.isNotSet(NaN)).toEqual(false);
    expect(filters.isNotSet(0)).toEqual(false);
    expect(filters.isNotSet(undefined)).toEqual(true);
  });
 });

});