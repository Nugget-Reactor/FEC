import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';
import axios from 'axios';
import { createCloudinaryWidget } from '../../Tools/cloudWidget.js';

const ModalForm = ({ productID, productName }) => {

  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const summaryRef = useRef();
  const bodyRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const photoRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  useEffect(() => {
    photoRef.current = createCloudinaryWidget((url) => {
      setPhotos([...photos, url]);
    })
  }, []);

  const createStarInput = () => {
    let meaning = '';
    if(rating === 1) {
      meaning = 'Poor';
    } else if (rating === 2) {
      meaning = 'Fair';
    } else if (rating === 3) {
      meaning = 'Average';
    } else if (rating === 4) {
      meaning = 'Good';
    } else if (rating === 5) {
      meaning = 'Great';
    }

    let stars = createStars(rating).map((star, i) =>
    <StarButton type="button" key={i} onClick={() => {
      setRating(i+1)
    }}>{star}</StarButton>);

    stars.push(<Span key="6">{meaning}</Span>);
    return stars;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/reviews', {
      product_id: productID,
      rating,
      summary: summaryRef.current.value,
      body: bodyRef.current.value,
      recommend,
      name: nameRef.current.value,
      email: emailRef.current.value,
      photos,
      characteristics: {},
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
            <input onClick={()=>setRecommend(true)} id="yes" type="radio" name="recommend" value="yes"/>
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input onClick={()=>setRecommend(false)} id="no" type="radio" name="recommend" value="no"/>
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div>
          Characteristics <Required />

        </div>
        <InputLabel>
          Add a headline
          <TextInput type="text" ref={summaryRef} maxLength="60" placeholder="Example: Best purchase ever!" ></TextInput>
        </InputLabel>
        <InputLabel>
          <div>Add a written review <Required /></div>
          <TextAreaInput required ref={bodyRef} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" ></TextAreaInput>
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
        <InputLabel>
          Add a photo URL
          <button onClick={()=>photoRef.current.open()}></button>
          {photos.length ? photos.map((photo, i)=><Thumbnail imgLink={photo} key={i}></Thumbnail>) : null}
        </InputLabel>
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
  background: white;

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
const PhotoInput = styled.input`

`
const PhotoSubmit = styled.button`

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

const StarButton = styled.button`
  border:none;
  background:none;
  cursor: pointer;
  font-size: 2rem;
`

const SubmitButton = styled.button`
  cursor: pointer;
  font-size: 1.25rem;
  margin: 5px;
`

export default ModalForm;