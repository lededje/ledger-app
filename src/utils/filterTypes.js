import FilterControl from 'components/FilterControl';
import FilterControlLabel from 'components/FilterControlLabel';

const types = {
  number: [
    {
      component: FilterControl,
      label: 'greater than',
      name: 'greater-than',
      input: {
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'less than',
      name: 'less-than',
      input: {
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'is',
      name: 'equal-to',
      input: {
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'is not',
      name: 'not-equal-to',
      input: {
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'is known',
      name: 'is-set'
    },
    {
      component: FilterControl,
      label: 'is unknown',
      name: 'is-not-set'
    }
  ],
  money: [
    {
      component: FilterControl,
      label: 'greater than',
      name: 'greater-than',
      input: {
        prefix: '£',
        type: 'number'
      },
      },
    {
      component: FilterControl,
      label: 'less than',
      name: 'less-than',
      input: {
        prefix: '£',
        type: 'number'
      },
      },
    {
      component: FilterControl,
      label: 'is',
      name: 'equal-to',
      input: {
        prefix: '£',
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'is not',
      name: 'not-equal-to',
      input: {
        prefix: '£',
        type: 'number'
      }
    },
    {
      component: FilterControl,
      label: 'is known',
      name: 'is-set'
    },
    {
      component: FilterControl,
      label: 'is unknown',
      name: 'is-not-set'
    }
  ],
  string: [
    {
      component: FilterControl,
      label: 'is',
      name: 'equal-to',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'is not',
      name: 'not-equal-to',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'starts with',
      name: 'begins-with',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'ends with',
      name: 'ends-with',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'contains',
      name: 'contains',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'does not contain',
      name: 'does-not-contain',
      input: {
        type: 'text'
      }
    },
    {
      component: FilterControl,
      label: 'is unknown',
      name: 'is-not-set'
    },
    {
      component: FilterControl,
      label: 'has any value',
      name: 'has-any-value'
    }
  ],
  boolean: [
    {
      component: FilterControl,
      label: 'is true',
      name: 'is-true'
    },
    {
      component: FilterControl,
      label: 'is false',
      name: 'is-false'
    },
    {
      component: FilterControl,
      label: 'is unknown',
      name: 'is-not-set'
    },
    {
      component: FilterControl,
      label: 'has any value',
      name: 'has-any-value'
    }
  ],
  date: [
    {
      component: FilterControlLabel,
      label: 'Relative'
    },
    {
      component: FilterControl,
      label: 'more than',
      name: 'greater-than',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: FilterControl,
      label: 'exactly',
      name: 'relative-equal-to',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: FilterControl,
      label: 'less than',
      name: 'less-than',
      input: {
        type: 'number',
        suffix: 'days ago'
      }
    },
    {
      component: FilterControlLabel,
      label: 'Absolute'
    },
    {
      component: FilterControl,
      label: 'after',
      name: 'absolute-greater-than',
      input: {
        type: 'date'
      }
    },
    {
      component: FilterControl,
      label: 'on',
      name: 'equal-to',
      input: {
        type: 'date'
      }
    },
    {
      component: FilterControl,
      label: 'before',
      name: 'absolute-less-than',
      input: {
        type: 'date'
      }
    },
    {
      component: FilterControl,
      label: 'is known',
      name: 'is-set'
    },
    {
      component: FilterControl,
      label: 'is unknown',
      name: 'is-not-set'
    }
  ]
};


export default types;