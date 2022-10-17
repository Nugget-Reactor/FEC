import React from 'react';
import styled from 'styled-components';

import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = ({ answersObj }) => {

  const answersArr = [];
  for (let key in answersObj) {
    answersArr.push(answersObj[key]);
  }
  answersArr.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });

  // console.log('answerslist', answersArr);

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
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 50vh;
  width: 96vw;
`;

const LoadMoreAnswers = styled.a`
  display: block;
  margin: 10px;
  font-size: 11px;
`;