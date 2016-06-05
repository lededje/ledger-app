
import transactionsFilter from 'utils/transactionsFilter';

export default function (transactions, filters, sortingOptions) {

    const filterActions = _.map(filters, (filter, attribute) => {
      return {
        attribute,
        ...filter
      }
    });

    return transactionsFilter(transactions, filterActions, sortingOptions);
}