import React, { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Section } from '../Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    console.log(options);
    return (
      <Container>
        <p>title</p>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} />
        </Section>
      </Container>
    );
  }
}
