import React from 'react';
import styled from 'styled-components';

const QuestionModal = () => {
  return (
    <>
      <QuestionContainer>
        <Heading4>Ask Your Question</Heading4>
        <Heading5>About the [Product Name Here]</Heading5>
        <QuestionForm>
          <div>
            <Label>Your Question*: </Label>
            <TextField defaultValue="Type Question Here..."></TextField>
          </div>
          <div>
            <Label>What is your Nickname*: </Label>
            <Input />
          </div>
          <div>
            <Label>Your Email*: </Label>
            <Input />
          </div>
          <div>
            <SubmitButton>Submit Question</SubmitButton>
          </div>
        </QuestionForm>
      </QuestionContainer>
    </>
  )
}

export default QuestionModal;

const QuestionContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border: 1px solid #ccc;
`;

const Heading4 = styled.h4`
  margin: 5px;
`;

const Heading5 = styled.h5`
  margin: 5px;
`;

const QuestionForm = styled.form`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  background: white;
`;

const Label = styled.label`
  margin: 5px;
`;

const TextField = styled.textarea`
  margin: 5px;
`;

const Input = styled.input`
  margin: 5px;
`;

const SubmitButton = styled.button`
  border: none;
`;