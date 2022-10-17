import React, { useEffect } from 'react';
import styled from 'styled-components';

const QuestionModal = ({ name, handleClick }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <QuestionContainer>
      <CloseBtn onClick={handleClick} className="fa-solid fa-x"></CloseBtn>
      <Heading4>Ask Your Question</Heading4>
      <Heading5>About the <i>{name}</i></Heading5>
      <QuestionForm>
        <QuestionBody>
          <Label>Your Question*: </Label>
          <TextField defaultValue="Type Question Here..."></TextField>
        </QuestionBody>
        <QuestionBody>
          <Label>What is your Nickname*: </Label>
          <Input />
        </QuestionBody>
        <QuestionBody>
          <Label>Your Email*: </Label>
          <Input />
        </QuestionBody>
        <QuestionBody>
          <SubmitButton>Submit Question</SubmitButton>
        </QuestionBody>
      </QuestionForm>
    </QuestionContainer>
  )
}

export default QuestionModal;

const QuestionContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  background: white;
`;

const CloseBtn = styled.i`
  position: fixed;
  top: 0vh;
  right: 0vw;
  z-index: 1;
  padding: 5px;
`;

const QuestionBody = styled.div`
  display: flex;
  flex-direction: column;
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

`;