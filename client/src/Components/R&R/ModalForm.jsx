import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';

const ModalForm = ({ setShowModal, productName }) => {

  const [rating, setRating] = useState(0);
  const summaryRef = useRef();
  const bodyRef = useRef();
  const recommendRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
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

    /* axios.post('/reviews', {
      productId,
      rating,
      summary:,
      body:,
      recommend:,
      name:,
      email:,
      photos:,
      characteristics:,

    }) */
  }
  return(
    <ModalContainer>
      <Modal onSubmit={handleSubmit}>
        <ModalHeader>
          <div>
            <h5>Write your review</h5>
            <h6>About the {productName}</h6>
          </div>
          <SmallButton type="button" onClick={()=>setShowModal(false)}>x</SmallButton>
        </ModalHeader>
        <ModalContent>
          <label >Overall Rating <Required/></label>
          <div>
            {createStarInput()}
          </div>
          <div>
            Do you recommend this product? <Required />
            <div>
              <input id="yes" type="radio" name="recommend" value="yes"/>
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input id="no" type="radio" name="recommend" value="no"/>
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div>
            Characteristics <Required />

          </div>
          <InputLabel>
            Add a headline
            <TextInput type="text" maxLength="60" placeholder="Example: Best purchase ever!" ></TextInput>
          </InputLabel>
          <InputLabel>
            <div>Add a written review <Required /></div>
            <TextAreaInput required minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" ></TextAreaInput>
          </InputLabel>
          <InputLabel>
            <div>What is your nickname? <Required /></div>
            <TextInput required type="text" maxLength="60" placeholder="Example: jackson11!" ></TextInput>
            <p>For privacy reasons, do not use your full name or email address</p>
          </InputLabel>
          <InputLabel>
            <div>Your email <Required /></div>
            <TextInput required type="email" maxLength="60" placeholder="Example: jackson11@email.com" ></TextInput>
            <p>For authentication reasons, you will not be emailed</p>
          </InputLabel>

        </ModalContent>
        <ModalFooter>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ModalFooter>
      </Modal>

    </ModalContainer>
  );
}


const ModalContainer = styled.div`
  position: fixed;
  width:100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  overscroll-behavior: none;
`
const Modal = styled.form`
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

const SmallButton = styled.button`
  text-decoration: underline;
  border: none;
  background: none;
  cursor: pointer;
  color:blue;
  font-size:1.5rem;
  margin-right: 5px;
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