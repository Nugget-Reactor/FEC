import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';
import axios from 'axios';
import { createCloudinaryWidget } from '../../Tools/cloudWidget.js';
import CharacteristicInput from './CharacteristicInput.jsx';

const ModalForm = ({ productID, productName, characteristicModel, closeModal, rerender }) => {

  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const summaryRef = useRef();
  const [bodyText, setBodyText] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const photoRef = useRef();
  const [tempPhoto, setTempPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});
  useEffect(() => {
    photoRef.current = createCloudinaryWidget((url) => {
      setTempPhoto(url);
    })
    return () => {
      document.querySelector("iframe").remove();
    };
  }, []);

  useEffect(() => {
    if(tempPhoto) {
      setPhotos([...photos, tempPhoto]);
    }
    if(photos.length === 4){
      photoRef.current.close();
    }
  }, [tempPhoto]);

  const deletePhoto = (idx) => {
    let newPhotos = [...photos];
    newPhotos.splice(idx, 1);
    setPhotos(newPhotos);
  }
  const createStarInput = () => {
    let meaning = '';
    if(rating === '1') {
      meaning = 'Poor';
    } else if (rating === '2') {
      meaning = 'Fair';
    } else if (rating === '3') {
      meaning = 'Average';
    } else if (rating === '4') {
      meaning = 'Good';
    } else if (rating === '5') {
      meaning = 'Great';
    }

    let stars = createStars(rating).map((star, i) =>
      <StarLabel key={i}>
        <StarRadio type="radio" name="rating" value={i+1} onClick={()=>setRating(i+1)} required />
        {star}
      </StarLabel>
    );

    stars.push(<Span key="6">{meaning}</Span>);
    return stars;
  }

  const createCharacteristicInput = () => {
    let result = [];
    for(let char in characteristicModel) {
      result.push(<CharacteristicInput name={char} charID={characteristicModel[char].id} key={char} onChange={handleCharChange}/>)
    }
    return result;
  }
  const handleCharChange = (name, value) => {
    let newChars = {...characteristics};
    newChars[name] = value;
    setCharacteristics(newChars);
  }
  const countBody = () => {
    if(bodyText.length < 50) {
      return 'Minimum required characters left: ' + (50 - bodyText.length);
    } else if(bodyText.length === 1000) {
      return 'Maximum characters reached';
    } else {
      return 'Minimum reached';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/reviews', {
      product_id: productID,
      rating,
      summary: summaryRef.current.value,
      body: bodyText,
      recommend,
      name: nameRef.current.value,
      email: emailRef.current.value,
      photos,
      characteristics: {},
    })
    .then(res=> {
      rerender();
      closeModal();
    })
    .catch(err=>console.error(err));
  }
  return(
    <Form onSubmit={handleSubmit} >
      <ModalHeader>
        <div>
          <h5>Write your review</h5>
          <h6>About the {productName}</h6>
        </div>
      </ModalHeader>
      <ModalContent>
        <label >Overall Rating <Required/></label>
        <div>
          {createStarInput()}
        </div>
        <div>
          Do you recommend this product? <Required />
          <div>
            <input onClick={()=>setRecommend(true)} id="yes" type="radio" name="recommend" value="yes" required/>
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input onClick={()=>setRecommend(false)} id="no" type="radio" name="recommend" value="no" required/>
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div>
          Characteristics <Required />
          {createCharacteristicInput()}
        </div>
        <InputLabel>
          Add a headline
          <TextInput type="text" ref={summaryRef} maxLength="60" placeholder="Example: Best purchase ever!" ></TextInput>
        </InputLabel>
        <InputLabel>
          <div>Add a written review <Required /></div>
          <TextAreaInput required value={bodyText} onChange={(e)=>setBodyText(e.target.value)} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" ></TextAreaInput>
          <p>{countBody()}</p>
        </InputLabel>
        <InputLabel>
          <div>What is your nickname? <Required /></div>
          <TextInput required ref={nameRef} type="text" maxLength="60" placeholder="Example: jackson11!" ></TextInput>
          <p>For privacy reasons, do not use your full name or email address</p>
        </InputLabel>
        <InputLabel>
          <div>Your email <Required /></div>
          <TextInput required ref={emailRef} type="email" maxLength="60" placeholder="Example: jackson11@email.com" ></TextInput>
          <p>For authentication reasons, you will not be emailed</p>
        </InputLabel>
        <div>
          Add a photo
          <ThumbnailContainer>
            {photos.length
            ? photos.map((photo, i)=>
            <div key={i} style={{position: "relative"}}>
              <Thumbnail imgLink={photo} key={i}></Thumbnail>
              <DeleteButton type="button" onClick={()=>deletePhoto(i)}>x</DeleteButton>
            </div>)
            : null}
            {photos.length < 5
            ? <AddImageButton type="button" onClick={()=>photoRef.current.open()}>+</AddImageButton>
            :null}
          </ThumbnailContainer>
        </div>
      </ModalContent>
      <ModalFooter>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ModalFooter>
    </Form>
  );
}

const Form = styled.form`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: rgba(112,128,175,0.2)0px 16px 24px 0px;
  width: 600px;
  max-height: 90vh;
  background: white;
  overflow:auto;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 0;
  & div {
    margin: 10px;
    font-size: 1.75rem;
  }
  & h5,
  & h6 {
    margin: 0;
  }
`

const ModalContent = styled.div`
  padding:10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ModalFooter = styled.div`
  background-color: #eee;
  border-top: 1px solid black;
  padding: 5px;
  display: flex;
  justify-content:end;
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  & p {
    margin: 0;
    font-size: 0.8rem;
  }
`
const TextInput = styled.input`
  display:block;
  margin: 5px 0;
  padding: 0.5rem;
`
const TextAreaInput = styled.textarea`
  display:block;
  margin: 5px 0;
  padding: 0.5rem;
  height: 200px;
`
const ThumbnailContainer = styled.div`
  display:flex;
  gap: 10px;
`
const Thumbnail = styled.a`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imgLink});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin-right: 2px;
`
const Span = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  margin-left: 7px;
`

const Required = styled.span`
  color: red;
  &::after {
    content: "*"
  }
`

const StarRadio = styled.input`
  opacity: 0;
  width: 1px;
  position: fixed;
`
const StarLabel = styled.label`
  cursor:pointer;
  margin: 5px;
  & *{
    font-size: 1.5rem;
  }
`
const AddImageButton = styled.button`
  width: 100px;
  height: 100px;
  background: rgba(24, 220, 255,0.5);
  border: 2px dashed rgba(23, 192, 235,1.0);
  border-radius: 5px;
  color: rgba(23, 192, 235,1.0);
  font-size: 3rem;
`

const SubmitButton = styled.button`
  cursor: pointer;
  font-size: 1.25rem;
  margin: 5px;
`

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 0 3px;
  border: 1px solid black;
  border-radius: 100%;
  background: lightgrey;
  position: absolute;
  top: -3px;
  left: 93px;
`

export default ModalForm;