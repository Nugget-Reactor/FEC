import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Modal = ({ closeModal, children }) => {
  const escModal = (e) => {
    if(e.key === 'Escape'){
      closeModal();
    }
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', escModal, false);
    return ()=> {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', escModal, false);
    }
  }, []);

  return(
    <ModalContainer>
      <CloseButton type="button" onClick={closeModal}>x</CloseButton>
      {children}
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width:100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  background-color: rgba(45, 52, 54, 0.9);
  z-index: 42;

`
const CloseButton = styled.button`
  text-decoration: underline;
  font-size: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 2vh;
  left: 97vw;
`

export default Modal;