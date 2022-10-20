import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AnswerModal = ({ showAModal, setShowAModal, questionBody, questionName, question_id }) => {

  const hiddenFileInput = useRef(null);
  const [answerBody, setAnswerBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const handlePhotosClick = e => {
    e.preventDefault();
    hiddenFileInput.current.click();
  }

  const validateForm = () => {
    let formAnswerBody = answerBody;
    let formUsername = username;
    let formEmail = email;
    let formPhotos = photos
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formAnswerBody === '') {
      alert('Your Answer field must be filled out');
      return false;
    }
    if (formUsername === '') {
      alert('Nickname field must be filled out');
      return false;
    }
    if (!formEmail.match(validEmail)) {
      alert('Email must be in following format: example@example.example');
      return false;
    }
    if (formPhotos.length > 5) {
      alert('Only 5 photos are allowed to be uploaded to answers');
      return false;
    }
    return true;
  }

  const handleSubmitA = e => {
    e.preventDefault();
    console.log('question_id', question_id);
    console.log('answerBody', answerBody);
    console.log('username', username);
    console.log('email', email);
    console.log('photos', photos);
    let aObj = {};
    aObj.body = answerBody;
    aObj.name = username;
    aObj.email = email;
    aObj.photos = photos;
    if (validateForm()) {
      axios.post(`/qa/questions/${question_id}/answers`, aObj)
        .then(results => {
          setShowAModal(!showAModal);
          setAnswerBody('');
          setUsername('');
          setEmail('');
          setPhotos([]);
        })
    }

  }
  // helper validator should check 5 or less images, more alerts error

  return (
    <AnswerContainer>
      <CloseBtn onClick={() => setShowAModal(!showAModal)} className="fa-solid fa-x"></CloseBtn>
      <AnswerForm>
        <AnswerHeading4>Submit Your Answer</AnswerHeading4>
        <AnswerHeading5>{questionName}: {questionBody}</AnswerHeading5>
        <FormDiv>
          <AnswerLabel>Your Answer*:</AnswerLabel>
          <AnswerField
            placeholder="Your Answer Here..."
            value={answerBody}
            onChange={e => setAnswerBody(e.target.value)}
            type="text"
            required
            maxlength="1000"
          ></AnswerField>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Nickname*:</AnswerLabel>
          <AnswerInput
            placeholder="Example: jack543!"
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            required
            maxlength="60"
          ></AnswerInput>
          <AnswerText>Note: For privacy reasons, do not use your full name or email address</AnswerText>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Email*:</AnswerLabel>
          <AnswerInput
            placeholder="Example: jack@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            required
            maxlength="60"
          ></AnswerInput>
          <AnswerText>Note: For authentication reasons, you will not be emailed</AnswerText>
        </FormDiv>
        <FormFooter>
          <AnswerFormPhotos onClick={handlePhotosClick}>Upload Your Photos</AnswerFormPhotos>
          <AddPhotos
            id="upload-files"
            type="file"
            accept="image/*"
            multiple
            ref={hiddenFileInput}
            style={{ display: 'none' }}
            onChange={() => console.log(document.getElementById('upload-files').files)}
          />
          <AnswerFormSubmit onClick={handleSubmitA}>Submit Answer</AnswerFormSubmit>
        </FormFooter>
      </AnswerForm>
    </AnswerContainer>
  )
}

export default AnswerModal;

const AnswerContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border: 1px solid #ccc;
  backdrop-filter: blur(6px);
  background-color: rgba(45, 52, 54, 0.9);
`;

const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  background: white;
`;

const AddPhotos = styled.input`
`;

const CloseBtn = styled.i`
  position: fixed;
  top: 0vh;
  right: 0vw;
  z-index: 1;
  padding: 5px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerInput = styled.input`
  margin: 5px;
`;

const AnswerField = styled.textarea`
  margin: 5px;
`;

const AnswerLabel = styled.label`
  display: flex;
  margin: 5px;
`;

const AnswerFormSubmit = styled.button`
`;

const AnswerFormPhotos = styled.button`
`;

const AnswerHeading4 = styled.h4`
  display: block;
  margin: 5px;
`;

const AnswerHeading5 = styled.h5`
  display: inline-block;
  margin: 5px;
`;

const AnswerText = styled.span`
  margin: 5px;
  font-size: 1rem;
  font-style: italic;
`;