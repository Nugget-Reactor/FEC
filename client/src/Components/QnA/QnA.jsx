import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// remove before push
import sampleData from '../../../../sampledata.js';

import SearchQnA from './SearchQnA.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';

// remove before push
console.log(sampleData);

const QnA = () => {

  const [showQModal, setShowQModal] = useState(false);

  useEffect(() => {
    axios.get('/questions')
      .then(results => console.log('results data for questions component', results.data))
      .catch(err => console.log('questions error', err))
  }, [])

  const handleAddQ = (e) => {
    e.preventDefault();
    setShowQModal(!showQModal)
  }

  return (
    <div>
      <QFeatureContainer>
        <Heading2>Questions & Answers</Heading2>
        <SearchQnA />
        <QuestionsList questionsList={sampleData.results} />
        <MoreAnsweredButton>More Answered Questions</MoreAnsweredButton>
        <AddQButton onClick={handleAddQ}>Add A Question +</AddQButton>
        {showQModal ? <QuestionModal /> : null}
      </QFeatureContainer>
    </div>
  )
}

export default QnA;

const Heading2 = styled.h2`
  color: red;
`;

const AddQButton = styled.button`
  background-color: coral;
  width: 200px;
  height: 75px;
`;

const MoreAnsweredButton = styled.button`
  background-color: coral;
  width: 200px;
  height: 75px;
`;

const QFeatureContainer = styled.div`

`;