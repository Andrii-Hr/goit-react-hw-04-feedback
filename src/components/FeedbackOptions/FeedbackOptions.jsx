import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, LeaveFeedback }) => (
  <>
    {Object.keys(options).map(el => (
      <button
        onClick={LeaveFeedback}
        key={el}
        value={el}
        className={css.filterBtn}
        type="button"
      >
        {el.toUpperCase()}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  LeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
