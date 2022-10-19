import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = ({ answersObj }) => {

  const [totalCount, setTotalCount] = useState(0);
  const [currCount, setCurrCount] = useState(0);

  const answersArr = [];
  for (let key in answersObj) {
    answersArr.push(answersObj[key]);
  }
  answersArr.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  useEffect(() => {
    setTotalCount(answersArr.length);
  }, []);

  const handleLoadMoreAs = (e) => {
    e.preventDefault();
    setCurrCount(currCount + 2);
  }

  return (
    <AnswersContainer>
      {currCount < totalCount
        ? answersArr.map((answer, index) => {
          if (index < currCount + 2) {
            return <AnswerEntry entry={answer} key={index} />
          }
        })
        : answersArr.map((answer, index) => {
          return <AnswerEntry entry={answer} key={index} />
        })}
      {answersArr.length !== 0 && currCount < totalCount &&
        <LoadMoreAnswers href="" onClick={handleLoadMoreAs}>LOAD MORE ANSWERS</LoadMoreAnswers>}
    </AnswersContainer>
  )
}

export default AnswersList;

const AnswersContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const LoadMoreAnswers = styled.a`
  display: block;
  margin: 10px;
  font-size: 1rem;
`;