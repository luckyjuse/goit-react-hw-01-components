import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTbody,
  TransactionTd,
  TransactionTh,
  TransactionThead,
  TransactionTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionTbody key={id}>
          <TransactionTr>
            <TransactionTd>{type}</TransactionTd>
            <TransactionTd>{amount}</TransactionTd>
            <TransactionTd>{currency}</TransactionTd>
          </TransactionTr>
        </TransactionTbody>
      ))}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
