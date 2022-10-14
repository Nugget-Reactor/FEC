import React from 'react';
import styled from 'styled-components';

import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = ({ answersObj }) => {

  const answersArr = [];
  for (let key in answersObj) {
    answersArr.push(answersObj[key]);
  }

  // console.log('answers list answer arr', answersArr);

  return (
    <div>
      {answersArr.length > 2
        ? answersArr.map((answer, index) => {
          if (index < 2) {
            return <AnswerEntry entry={answer} key={index} />
          }
        })
        : answersArr.map((answer, index) => {
          return <AnswerEntry entry={answer} key={index} />
        })}
      {<LoadMoreAnswers>LOAD MORE ANSWERS</LoadMoreAnswers>}
    </div>
  )
}

export default AnswersList;

const LoadMoreAnswers = styled.button`
  display: block;
  margin: 10px;
  font-size: 11px;
`;