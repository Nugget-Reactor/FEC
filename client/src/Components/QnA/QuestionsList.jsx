import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import styled from 'styled-components';

const QuestionsList = ({ questionsList, name, handleAddQ }) => {

  // useEffect(() => {
  //   questionsList
  // }, [])

  return (
    <QuestionListContainer>
      <QuestionListBody>
        {questionsList.length > 2
          ? questionsList.map((question, index) => {
            if (index < 2) {
              return <QuestionEntry entry={question} key={index} name={name} />
            }
          })
          : questionsList.map((question, index) => {
            return <QuestionEntry entry={question} key={index} name={name} />
          })}
      </QuestionListBody>
      <QuestionListFooter>
        <MoreAnsweredButton>MORE ANSWERED QUESTIONS</MoreAnsweredButton>
        <AddQButton onClick={handleAddQ}>ADD A QUESTION +</AddQButton>
      </QuestionListFooter>
    </QuestionListContainer>
  )
}

export default QuestionsList;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionListFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AddQButton = styled.button`
  height: 75px;
  width: 200px;
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
`;

const MoreAnsweredButton = styled.button`
  height: 75px;
  width: 200px;
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
`;