import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  width: 90px;
  color: #26e3f0;
  background-color: black;
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  border: none;
 

  &:hover,
  &:focus {
    color: black;
    background-color: #26e3f0;
    cursor: pointer;
  }
`;
