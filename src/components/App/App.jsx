import css from './App.module.css';
import React, { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import {Notification} from 'components/Notification/Notification';
import {Section} from 'components/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prev => prev + 1);
    } else if (option === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (option === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  function getTotalFeedback() {
    return good + neutral + bad;
  }

  function getPositivePercentage() {
    return Math.floor((good / getTotalFeedback()) * 100);
  }

  const total = getTotalFeedback();
  
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={getPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback!"></Notification>
        )}
      </Section>
    </div>
  );
};
