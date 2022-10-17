import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SearchQnA from './SearchQnA.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';


const QnA = ({ product }) => {

  const [questions, setQuestions] = useState([]);
  const [showQModal, setShowQModal] = useState(false);

  // console.log('product prop from questions', product);



  useEffect(() => {
    if (product.id !== undefined) {
      axios.get(`/qa/questions?product_id=${product.id}`)
        .then(results => setQuestions(results.data.results))
        .catch(err => console.log('questions error', err))
    }
  }, [product])

  const handleAddQ = (e) => {
    e.preventDefault();
    setShowQModal(!showQModal)
  }

  return (
    <QFeatureContainer>
      <Heading2>Questions & Answers</Heading2>
      <SearchQnA />
      <QuestionsList questionsList={questions} name={product.name} handleAddQ={handleAddQ} />
      {showQModal ? <QuestionModal product_id={product.id} name={product.name} handleClick={handleAddQ}></QuestionModal> : null}
    </QFeatureContainer>
  )
}

export default QnA;

const Heading2 = styled.h2`
`;

const QFeatureContainer = styled.div`
  margin: 40px 100px;
`;