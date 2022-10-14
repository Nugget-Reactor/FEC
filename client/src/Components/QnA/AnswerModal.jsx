import React from 'react';
import styled from 'styled-components';

const AnswerModal = () => {
  return (
    <AnswerContainer>
      <AnswerForm>
        <AnswerInput />
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
  background-color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border: 1px solid #ccc;
`;

const AnswerForm = styled.form`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  background: white;
`;

const AnswerInput = styled.input`
  margin: 5px;
`;