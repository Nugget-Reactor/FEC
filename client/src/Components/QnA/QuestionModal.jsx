import React from 'react';
import styled from 'styled-components';

const QuestionModal = () => {
  return (
    <>
      <Heading4>Ask Your Question</Heading4>
      <h5>About the [Product Name Here]</h5>
      <QuestionForm>
        <div>
          <label>Your Question*: </label>
          <input />
        </div>
        <div>
          <label>What is your Nickname*: </label>
          <input />
        </div>
        <div>
          <label>Your Email*: </label>
          <input />
        </div>
        <div>
          <button>Submit Question</button>
        </div>
      </QuestionForm>
    </>
  )
}

export default QuestionModal;

const Heading4 = styled.h4`
  color: red;
`;

const QuestionForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;