import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={css.statText}>
      Good:
      <span className={css.statValue}>{good}</span>
    </p>
    <p className={css.statText}>
      Neutral:
      <span className={css.statValue}>{neutral}</span>
    </p>
    <p className={css.statText}>
      Bad:
      <span className={css.statValue}>{bad}</span>
    </p>
    <p className={css.statText}>
      Total:
      <span className={css.statValue}>{total()}</span>
    </p>
    <p className={css.statText}>
      Positive feedback:
      <span className={css.statValue}>
        {Math.round(positivePercentage()) || '0'}%
      </span>
    </p>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
