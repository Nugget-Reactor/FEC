import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompareModalTable from './CompareModalTable.jsx'; //Jonah's has this as a child or 'related item'

const CompareModal = ({closeModal}) => {
  const escModal = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   document.addEventListener('keydown', escModal, false);
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //     document.removeEventListener('keydown', escModal, false);
  //   };
  // }, []);

  return (
    <CompareModalContainer>
      <div>Hello!</div>
    </CompareModalContainer>
  );
};

export default CompareModal;

const CompareModalContainer = styled.div`
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
`;
