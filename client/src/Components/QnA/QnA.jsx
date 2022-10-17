import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// remove before push
import sampleData from '../../../../samplequestions.js';

import SearchQnA from './SearchQnA.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';

// remove before push
// console.log(sampleData);

const QnA = ({ product }) => {
  const [questions, setQuestions] = useState([]);

  // console.log('product prop from questions', product);

  const [showQModal, setShowQModal] = useState(false);

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
      <QuestionsList questionsList={questions} />
      <MoreAnsweredButton>MORE ANSWERED QUESTIONS</MoreAnsweredButton>
      <AddQButton onClick={handleAddQ}>ADD A QUESTION +</AddQButton>
      {showQModal ? <QuestionModal></QuestionModal> : null}
    </QFeatureContainer>
  )
}

export default QnA;

const Heading2 = styled.h2`
`;

const AddQButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
`;

const MoreAnsweredButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
`;

const QFeatureContainer = styled.div`

`;