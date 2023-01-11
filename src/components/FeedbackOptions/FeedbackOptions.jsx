import css from './FeedbackOptions.module.css';
import { PropTypes } from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css[option]}
            onClick={() => {
              onLeaveFeedback(option);
            }}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;