import React, { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedBackOptions/FeedBackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    console.log(options)
    return (
      <Container>
        <FeedbackOptions options={options} />
        <p>Hello</p>
      </Container>
    );
  }
}