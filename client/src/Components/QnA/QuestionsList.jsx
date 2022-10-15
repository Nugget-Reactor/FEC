import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import styled from 'styled-components';

const QuestionsList = ({ questionsList }) => {

  // useEffect(() => {
  //   questionsList
  // }, [])

  return (
    <QuestionListContainer>
      {questionsList.length > 2
        ? questionsList.map((question, index) => {
          if (index < 2) {
            return <QuestionEntry entry={question} key={index} />
          }
        })
        : questionsList.map((question, index) => {
          return <QuestionEntry entry={question} key={index} />
        })}
    </QuestionListContainer>
  )
}

export default QuestionsList;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;