import css from './App.module.css';
import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  getTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  getPositivePercentage() {
    return Math.floor((this.state.good / this.getTotalFeedback()) * 100);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.getTotalFeedback();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.getPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback!"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
