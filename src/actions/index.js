// e.g amount, greater-than, 100
// attribute is required, filter and value are optional.

export function setFilter (attribute, filter = undefined, value = undefined) {
	return {
		type: 'SET_FILTER_TYPE',
		attribute,
		filter,
		value
	}
}

export function unsetFilter(attribute) {
	return {
		type: 'UNSET_FILTER_TYPE',
		attribute
	}
}

// {
//   filters: {
//     amount: {
//       'greater-than':
//     },
//     created: {
//       'more-than': true
//     }
//   }
// }