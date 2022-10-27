import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createCloudinaryWidget } from '../../Tools/cloudWidget.js';

const AnswerModal = ({ showAModal, setShowAModal, questionBody, questionName, questionID, setAnswersList }) => {

  const photoRef = useRef(null);
  const answerRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const [photos, setPhotos] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [tempPhoto, setTempPhoto] = useState(null);
  const [showImgModal, setShowImgModal] = useState(false);
  const [currImg, setCurrImg] = useState(null);

  useEffect(() => {
    const escModal = (e) => {
      if (e.key === 'Escape') {
        setShowAModal(!showAModal);
      }
    };
    let rootApp = document.getElementById('root');
    rootApp.style.overflow = 'hidden';
    document.addEventListener('keydown', escModal, false);
    return () => {
      rootApp.style.overflow = '';
      document.removeEventListener('keydown', escModal, false);
    };
  }, []);

  useEffect(() => {
    photoRef.current = createCloudinaryWidget((url) => {
      setTempPhoto(url);
    });
    return () => {
      document.querySelector('iframe').remove();
    };
  }, []);

  useEffect(() => {
    if (tempPhoto) {
      setPhotos([...photos, tempPhoto]);
    }
  }, [tempPhoto]);

  const validateAForm = () => {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (answerRef.current.value === '') {
      alert('Your Answer field must be filled out');
      return false;
    }
    if (usernameRef.current.value === '') {
      alert('Nickname field must be filled out');
      return false;
    }
    if (!emailRef.current.value.match(validEmail)) {
      alert('Email must be in following format: example@example.example');
      return false;
    }
    if (photos.length > 5) {
      alert('Only 5 photos are allowed to be uploaded to answers');
      return false;
    }
    return true;
  };

  const handleSubmitA = e => {
    e.preventDefault();
    let aObj = {};
    aObj.body = answerRef.current.value;
    aObj.name = usernameRef.current.value;
    aObj.email = emailRef.current.value;
    aObj.photos = photos;
    if (validateAForm()) {
      axios.post(`/qa/questions/${questionID}/answers`, aObj)
        .then(results => {
          setShowAModal(!showAModal);
          setPhotos([]);
          axios.get(`/qa/questions/${questionID}/answers`)
            .then(results => setAnswersList(results.data.results))
            .catch(err => console.log('get answers error in answer modal', err));
        })
        .catch(err => console.log('Error submitting answer', err));
    }
    setShowPreview(false);
  };

  const handleRemoveUpload = (e, index) => {
    e.preventDefault();
    let filtered = photos.filter((photo, i) => i !== index);
    setPhotos(filtered);
  };

  const handleImgModal = (e, url) => {
    e.preventDefault();
    setShowImgModal(!showImgModal);
    setCurrImg(url);
  };

  return (
    <AnswerContainer>
      <CloseBtn onClick={() => setShowAModal(!showAModal)} className="fa-solid fa-x"></CloseBtn>
      <AnswerForm>
        <AnswerHeading4>Submit Your Answer</AnswerHeading4>
        <AnswerHeading5>{questionName}: {questionBody}</AnswerHeading5>
        <FormDiv>
          <AnswerLabel>Your Answer*:</AnswerLabel>
          <AnswerField
            required
            placeholder="Your Answer Here..."
            ref={answerRef}
            type="text"
            maxlength="1000"
          ></AnswerField>
        </FormDiv>
        {showPreview && photos.length > 0
          ? <PhotosList>{photos.map((photo, index) => {
            return (
              <PhotoEntry key={index} onClick={(e) => handleImgModal(e, photo)}>
                {showImgModal
                  ? <ImgModalContainer onClick={e => setShowImgModal(!showImgModal)}><ImgModal src={currImg}></ImgModal></ImgModalContainer>
                  : null}
                <PhotoImg src={photo}></PhotoImg>
                <RemoveUpload onClick={e => handleRemoveUpload(e, index)}>X</RemoveUpload>
              </PhotoEntry>);
          })}</PhotosList>
          : <NoSelectedFiles>No files selected</NoSelectedFiles>}
        <FormDiv>
          <AnswerLabel>What is your Nickname*:</AnswerLabel>
          <AnswerInput
            required
            placeholder="Example: jack543!"
            ref={usernameRef}
            type="text"
            maxlength="60"
          ></AnswerInput>
          <AnswerText>Note: For privacy reasons, do not use your full name or email address</AnswerText>
        </FormDiv>
        <FormDiv>
          <AnswerLabel>What is your Email*:</AnswerLabel>
          <AnswerInput
            required
            placeholder="Example: jack@email.com"
            ref={emailRef}
            type="text"
            maxlength="60"
          ></AnswerInput>
          <AnswerText>Note: For authentication reasons, you will not be emailed</AnswerText>
        </FormDiv>
        <FormFooter>
          <AnswerFormPhotos onClick={(e) => {
            e.preventDefault();
            photoRef.current.open();
            setShowPreview(true);
          }}>Upload Your Photos</AnswerFormPhotos>
          <AnswerFormSubmit onClick={handleSubmitA}>Submit Answer</AnswerFormSubmit>
        </FormFooter>
      </AnswerForm>
    </AnswerContainer>
  );
};

export default AnswerModal;

const ImgModalContainer = styled.div`
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

const ImgModal = styled.img`
  height: 50vh;
  width: 50vw;
`;

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

const RemoveUpload = styled.div`
  display: inline-flex;
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
  font-size: 1em;
`;

const AnswerField = styled.textarea`
  margin: 5px;
  font-size: 1em;
`;

const AnswerLabel = styled.label`
  display: flex;
  margin: 5px;
`;

const AnswerFormSubmit = styled.button`
  font-size: 1em;
`;

const AnswerFormPhotos = styled.button`
  font-size: 1em;
`;

const PhotosList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
`;
const PhotoEntry = styled.li`
`;
const PhotoImg = styled.img`
  max-width: 10vw;
  max-height: 7vh;
`;

const AnswerHeading4 = styled.h4`
  display: block;
  margin: 5px;
  font-size: 1.25em;
`;

const AnswerHeading5 = styled.h5`
  display: inline-block;
  margin: 5px;
  font-size: 1.1em;
`;

const AnswerText = styled.span`
  margin: 5px;
  font-style: italic;
  font-size: .8em;
`;

const NoSelectedFiles = styled.p`
  margin: 5px;
  font-size: .9em;
`;