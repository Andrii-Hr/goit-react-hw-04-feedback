import React, { Component } from 'react';
import Statistics from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = evt => {
    const { value } = evt.target;

    this.setState(() => {
      return { [value]: this.state[value] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => (total += el), 0);
  };
  countPositiveFeedbackPercent = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ ...this.state }}
            LeaveFeedback={this.LeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercent}
            />
          ) : (
            <Notification message="There is no feedback!" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
