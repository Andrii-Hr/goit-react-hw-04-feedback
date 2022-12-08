import React from 'react';
import { useState } from 'react';
import Statistics from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercent = () => (good * 100) / countTotalFeedback();
  
  const LeaveFeedback = evt => {
    const { value } = evt.target;

    switch (value) {
      case 'good':
        setGood(s => s + 1);
        break;
    
    
      case 'neutral':
        setNeutral(s => s + 1);
        break;
    
    
      case 'bad':
        setBad(s => s + 1);
        break;

        default: return;
        
  };
} 

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          LeaveFeedback={LeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercent}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </>
  );
}
