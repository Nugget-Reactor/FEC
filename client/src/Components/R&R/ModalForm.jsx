import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ModalForm = ({ setShowModal }) => {

  const [rating, setRating] = useState(0);
  const summaryRef = useRef();
  const bodyRef = useRef();
  const recommendRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  const createStarInput = () => {
    let stars = [];

    for(let i = 0; i < 5; i++) {
      if(i < rating) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars.map((star, i) => <StarButton type="button" key={i} onClick={() => {
      setRating(i+1)
    }}>{star}</StarButton>);
  }

  const handleSubmit = () => {
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
      <Modal>
        <ModalHeader>
          <h5>Post a Review</h5>
          <SmallButton type="button" onClick={()=>setShowModal(false)}>x</SmallButton>
        </ModalHeader>
        <ModalContent>
          <div>{createStarInput()}</div>
          <label>
            Add a headline
            <input type="text" placeholder="What's most important to know?"></input>
          </label>
          <label>
            Add a written review
            <input type="textarea" placeholder="What did you like or dislike? What did you use this product for?"></input>
          </label>
          <label>
            Do you recommend this product?
            <input type="checkbox" id="recommend" name="recommend" value="true"/>
          </label>
        </ModalContent>
        <ModalFooter>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ModalFooter>
      </Modal>

    </ModalContainer>
  );
}


const ModalContainer = styled.div`
  position: absolute;
  width:100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
`
const Modal = styled.form`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: rgba(112,128,175,0.2)0px 16px 24px 0px;
  width: 500px;
  background: white;

`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 0;
  & h5 {
    margin: 10px;
    font-size: 1.5rem;
  }
`

const ModalContent = styled.div`
  padding:10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`
const ModalFooter = styled.div`
  background-color: #eee;
  border-top: 1px solid black;
  padding: 5px;
  display: flex;
  justify-content:end;
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