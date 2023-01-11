import css from './Statistics.module.css';
import { PropTypes } from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.item__good}>Good: {good}</p>
      <p className={css.item__neutral}>Neutral: {neutral}</p>
      <p className={css.item__bad}>Bad: {bad}</p>
      <p className={css.item__total}>Total: {total}</p>
      <p
        className={
          positivePercentage >= 66
            ? css.item__good
            : positivePercentage >= 33
            ? css.item__neutral
            : css.item__bad
        }
      >
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;