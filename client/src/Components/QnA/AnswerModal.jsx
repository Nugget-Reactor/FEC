import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AnswerModal = ({ handleClick, body }) => {

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
      <BtnDiv>
        <CloseBtn onClick={handleClick} className="fa-solid fa-x"></CloseBtn>
      </BtnDiv>
      <AnswerHeading4>Submit Your Answer</AnswerHeading4>
      <AnswerHeading5>[Product Name]: {body}</AnswerHeading5>
      <AnswerForm>
        <FormDiv>
          <AnswerLabel>Your Answer*:</AnswerLabel>
          <AnswerField placeholder="Your Answer Here..."></AnswerField>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Nickname*:</AnswerLabel>
          <AnswerInput placeholder="Example: jack543!"></AnswerInput>
          <AnswerText>*Note: For privacy reasons, do not use your full name or email address*</AnswerText>
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0);
  background-color: grey;
  z-index: 200;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  border: 1px solid #ccc;
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
  left: 57vw;
  z-index: 1;
  padding: 5px;
`;

const BtnDiv = styled.div`
  display: flex;
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
`;

const AnswerHeading5 = styled.h5`
  display: inline-block;
`;

const AnswerText = styled.span`
  margin: 5px;
  font-size: 12px;
  font-style: italic;
`;