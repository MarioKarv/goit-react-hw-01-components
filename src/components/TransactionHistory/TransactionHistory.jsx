import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.headlines_box}>
          <th className={css.headlines}>Type</th>
          <th className={css.headlines}>Amount</th>
          <th className={css.headlines}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, type, id, currency }) => {
          return (
            <tr key={id}>
              <td className={css.content}>{type}</td>
              <td className={css.content}>{amount}</td>
              <td className={css.content}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
