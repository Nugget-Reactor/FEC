import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompareModalTable from './CompareModalTable.jsx'; //

const CompareModal = ({closeModal, productName, relatedCharacteristics, currentCharacteristics, relatedName}) => {
  const escModal = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', escModal, false);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', escModal, false);
    };
  }, []);

  return (
    <CompareModalContainer onClick={closeModal}>
      <CompareModalTable productName={productName} relatedCharacteristics={relatedCharacteristics} currentCharacteristics={currentCharacteristics} relatedName={relatedName} />
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
  background-color: rgba(45, 52, 54, 0.3);
  z-index: 42;
`;
