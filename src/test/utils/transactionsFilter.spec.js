import expect from 'expect';
import transactionsFilter from 'utils/transactionsFilter';

import { filters } from 'utils/transactionsFilter'

import lolex from 'lolex';

import moment from 'moment';

import _ from 'lodash';

describe('Transactions filters', () => {

	describe('Less than', () => {

		it('should return the defaultReturn if a type is passed which is unknown', () => {
			expect(filters.lessThan(0, 1, undefined)).toEqual(false);
			expect(filters.lessThan(0, 1, undefined, true)).toEqual(true);
			expect(filters.lessThan(0, 1, 'unknown_type')).toEqual(false);
		});

		it('should return correctly return if the type is a number', () => {
			expect(filters.lessThan(0, 1, 'number')).toEqual(true);
			expect(filters.lessThan(1, 1, 'number')).toEqual(false);
			expect(filters.lessThan(2, 1, 'number')).toEqual(false);
		});

		it('should return correctly return if the type is a date', () => {

			const clock = lolex.install();

			expect(filters.lessThan('1969-12-30T00:00:00Z', 10, 'date')).toEqual(true);

			clock.tick('02:34:10');

			// This check should round to the nearest day.
			expect(filters.lessThan('1969-12-22T00:30:00Z', 10, 'date')).toEqual(true);

			clock.uninstall();

		});

	});

	describe('Greater than', () => {

		it('should return the defaultReturn if a type is passed which is unknown', () => {
			expect(filters.greaterThan(1, 0, undefined)).toEqual(false);
			expect(filters.greaterThan(0, 1, undefined, true)).toEqual(true);
			expect(filters.greaterThan(0, 1, 'unknown_type')).toEqual(false);
		});

		it('should return correctly return if the type is a number', () => {
			expect(filters.greaterThan(1, 0, 'number')).toEqual(true);
			expect(filters.greaterThan(1, 1, 'number')).toEqual(true);
			expect(filters.greaterThan(1, 2, 'number')).toEqual(false);
		});

		it('should return correctly return if the type is a date', () => {

			const clock = lolex.install();

			expect(filters.greaterThan('1969-12-30T00:00:00Z', 10, 'date')).toEqual(true);

			clock.tick('02:34:10');

			// This check should round to the nearest day.
			expect(filters.greaterThan('1969-12-22T00:30:00Z', 10, 'date')).toEqual(true);

			clock.uninstall();

		});

	});

});