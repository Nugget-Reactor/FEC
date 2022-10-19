import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AnswerModal = ({ handleClick, body, name }) => {

  const hiddenFileInput = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  const handlePhotosClick = e => {
    e.preventDefault();
    hiddenFileInput.current.click();
  }

  return (
    <AnswerContainer>
      <CloseBtn onClick={handleClick} className="fa-solid fa-x"></CloseBtn>
      <AnswerForm>
        <AnswerHeading4>Submit Your Answer</AnswerHeading4>
        <AnswerHeading5>{name}: {body}</AnswerHeading5>
        <FormDiv>
          <AnswerLabel>Your Answer*:</AnswerLabel>
          <AnswerField placeholder="Your Answer Here..."></AnswerField>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Nickname*:</AnswerLabel>
          <AnswerInput placeholder="Example: jack543!"></AnswerInput>
          <AnswerText>Note: For privacy reasons, do not use your full name or email address</AnswerText>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Email*:</AnswerLabel>
          <AnswerInput placeholder="Example: jack@email.com"></AnswerInput>
          <AnswerText>Note: For authentication reasons, you will not be emailed</AnswerText>
        </FormDiv>
        <FormFooter>
          <AnswerFormPhotos onClick={handlePhotosClick}>Upload Your Photos</AnswerFormPhotos>
          <AddPhotos
            type="file"
            ref={hiddenFileInput}
            style={{ display: 'none' }}
          />
          <AnswerFormSubmit onClick={e => handleClick(e)}>Submit Answer</AnswerFormSubmit>
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