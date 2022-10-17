import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuestionModal = ({ product_id, name, showQModal, setShowQModal }) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const validateForm = () => {
    let formQuestion = question;
    let formNickname = nickname;
    let formEmail = email;
    if (formQuestion === '') {
      alert('Question field must be filled out');
      return false;
    }
    if (formNickname === '') {
      alert('Nickname field must be filled out');
      return false;
    }
    if (formEmail === '') {
      alert('Email must be in following format: example@example.example');
      return false;
    }
    return true;
  }

  const handleSubmitQ = (e) => {
    e.preventDefault();
    console.log('question', question);
    console.log('nickname', nickname);
    console.log('email', email);
    if (validateForm()) {
      setShowQModal(!showQModal);
      setQuestion('');
      setNickname('');
      setEmail('');
    }
    // setShowQModal(!showQModal);

  }

  return (
    <QuestionContainer>
      <CloseBtn onClick={() => setShowQModal(!showQModal)} className="fa-solid fa-x"></CloseBtn>
      <QuestionForm>
        <Heading4>Ask Your Question</Heading4>
        <Heading5>About the <i>{name}</i></Heading5>
        <QuestionBody>
          <Label>Your Question*: </Label>
          <TextField
            placeholder="Why did you like the product or not?"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            type="text"
            required="required"
            maxlength="1000"
          ></TextField>
        </QuestionBody>
        <QuestionBody>
          <Label>What is your Nickname*: </Label>
          <Input
            placeholder="Type Nickname Here..."
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            type="text"
            required="required"
            maxlength="60"
          />
          <InputNote><i>
            Note: For privacy reasons, do not use your full name or email address
          </i></InputNote>
        </QuestionBody>
        <QuestionBody>
          <Label>Your Email*: </Label>
          <Input
            placeholder="Type Email Here..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            required="required"
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
  )
}

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
`;

const Heading4 = styled.h4`
  font-size: 1.25rem;
  margin: 5px;
`;

const Heading5 = styled.h5`
  font-size: 1.1rem;
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

const InputNote = styled.span`
  margin: 5px;
`;