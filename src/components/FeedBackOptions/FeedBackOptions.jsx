import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedBackOptions.styled';


export const FeedbackOptions = ({ options }) => {
  return (
    <FeedbackContainer title="Please leave feedback">
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          //   onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
};