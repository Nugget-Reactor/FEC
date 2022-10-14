import React from 'react';
import styled from 'styled-components';

import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = ({ answersObj }) => {

  const answersArr = [];
  for (let key in answersObj) {
    answersArr.push(answersObj[key]);
  }

  return (
    <AnswersContainer>
      {answersArr.length > 2
        ? answersArr.map((answer, index) => {
          if (index < 2) {
            return <AnswerEntry entry={answer} key={index} />
          }
        })
        : answersArr.map((answer, index) => {
          return <AnswerEntry entry={answer} key={index} />
        })}
      {<LoadMoreAnswers href="">LOAD MORE ANSWERS</LoadMoreAnswers>}
    </AnswersContainer>
  )
}

export default AnswersList;

const AnswersContainer = styled.div`
  margin: 10px;
`;

const LoadMoreAnswers = styled.a`
  display: block;
  margin: 10px;
  font-size: 11px;
`;