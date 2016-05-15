// e.g amount, greater-than, 100
// property is required, filter, filterType and value are optional.

// If filter is defined then a filterType MUST be defined too. A value is always
// optional. If the value is an empty string it will be IGNORED.

export function setFilter (property, filter = undefined, filterType = undefined, value = undefined) {
	return {
		type: 'SET_FILTER_TYPE',
		property,
		filter,
		filterType,
		value,
	}
}

export function setSortOrder(property, type, ascending = undefined) {

	return {
		type: 'SET_SORT_ORDER',
		property,
		sortType: type,
		ascending
	}
}

export function unsetFilter(property) {
	return {
		type: 'UNSET_FILTER_TYPE',
		property
	}
}
