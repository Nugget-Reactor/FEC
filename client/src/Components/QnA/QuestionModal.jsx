import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const QuestionModal = ({ productID, name, showQModal, setShowQModal, questions, setQuestions }) => {

  const questionRef = useRef(null);
  const nicknameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const validateForm = () => {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (questionRef.current.value === '') {
      alert('Question field must be filled out');
      return false;
    }
    if (nicknameRef.current.value === '') {
      alert('Nickname field must be filled out');
      return false;
    }
    if (!emailRef.current.value.match(validEmail)) {
      alert('Email must be in following format: example@example.example');
      return false;
    }
    return true;
  };

  const handleSubmitQ = (e) => {
    e.preventDefault();
    let qObj = {};
    qObj.body = questionRef.current.value;
    qObj.name = nicknameRef.current.value;
    qObj.email = emailRef.current.value;
    qObj.product_id = productID;
    if (validateForm()) {
      axios.post(`/qa/questions?product_id=${productID}`, qObj)
        .then(results => {
          setShowQModal(!showQModal);
          // get request to get updated list, just adding new object to end of questions state didnt work as expected
          axios.get(`/qa/questions?product_id=${productID}`)
            .then(results => setQuestions(results.data.results))
            .catch(err => console.log('get questions error in question modal', err));
        })
        .catch(err => console.log('Error submitting question', err));
    }
  };

  return (
    <QuestionContainer>
      <CloseBtn onClick={() => setShowQModal(!showQModal)} className="fa-solid fa-x"></CloseBtn>
      <QuestionForm>
        <Heading4>Ask Your Question</Heading4>
        <Heading5>About the <i>{name}</i></Heading5>
        <QuestionBody>
          <Label>Your Question*: </Label>
          <TextField
            required
            placeholder="Why did you like or not like the product?"
            ref={questionRef}
            type="text"
            maxlength="1000"
          ></TextField>
        </QuestionBody>
        <QuestionBody>
          <Label>What is your Nickname*: </Label>
          <Input
            required
            placeholder="Type Nickname Here..."
            ref={nicknameRef}
            type="text"
            maxlength="60"
          />
          <InputNote><i>
            Note: For privacy reasons, do not use your full name or email address
          </i></InputNote>
        </QuestionBody>
        <QuestionBody>
          <Label>Your Email*: </Label>
          <Input
            required
            placeholder="Type Email Here..."
            ref={emailRef}
            maxlength="60"
            type="email"
          />
          <InputNote><i>
            Note: For authentication reasons, you will not be emailed
          </i></InputNote>
        </QuestionBody>
        <QuestionBody>
          <SubmitButton onClick={handleSubmitQ}>Submit Question</SubmitButton>
        </QuestionBody>
      </QuestionForm>
    </QuestionContainer>
  );
};

export default QuestionModal;

const QuestionContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  backdrop-filter: blur(6px);
  background-color: rgba(45, 52, 54, 0.9);
  z-index: 200;
`;

const Heading4 = styled.h4`
  font-size: 1.25em;
  margin: 5px;
`;

const Heading5 = styled.h5`
  font-size: 1.1em;
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
  z-index: 201;
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
  font-size: 1em;
`;

const Input = styled.input`
  margin: 5px;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  font-size: 1em;
`;

const InputNote = styled.span`
  margin: 5px;
  font-size: .8em;
`;