import React, { useState } from 'react';
import styled from 'styled-components';

const ModalForm = ({ setShowModal }) => {

  const [rating, setRating] = useState(0);
  const createStarInput = () => {
    let stars = [];

    for(let i = 0; i < 5; i++) {
      if(i < rating) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars.map((star, i) => <button type="button" key={i} onClick={() => {
      setRating(i+1)
    }}>{star}</button>);
  }
  console.log(rating);
  return(
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <h5>Post a Review</h5>
          <SmallButton type="button" onClick={()=>setShowModal(false)}>x</SmallButton>
        </ModalHeader>
        <ModalContent>
          <div>{createStarInput()}</div>

        </ModalContent>
        <ModalFooter>
          <button type="submit">Submit</button>
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
  }
`

const ModalContent = styled.div`
  padding:10px;
  margin: 10px 0;
`
const ModalFooter = styled.div`
  background-color: #eee;
  border-top: 1px solid black;
  padding: 5px;
`

const SmallButton = styled.button`
  text-decoration: underline;
  border: none;
  background: none;
  color:blue;
`

const StarButton = styled.button`

`

export default ModalForm;