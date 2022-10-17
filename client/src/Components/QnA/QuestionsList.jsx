import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import styled from 'styled-components';

const QuestionsList = ({ questionsList, name, handleAddQ }) => {

  const [totalCount, setTotalCount] = useState(0);
  const [currCount, setCurrCount] = useState(0);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setTotalCount(questionsList.length);
    setFilteredList(questionsList);
  }, [questionsList]);

  console.log(filteredList, totalCount);

  const handleMoreAs = (e) => {
    e.preventDefault();
    setFilteredList(filteredList.slice(2));
    setCurrCount(currCount + 2);
  }

  return (
    <QuestionListContainer>
      <QuestionListBody>
        {currCount < totalCount
          ? questionsList.map((question, index) => {
            if (index < currCount + 2) {
              return <QuestionEntry entry={question} key={index} name={name} />
            }
          })
          : questionsList.map((question, index) => {
            return <QuestionEntry entry={question} key={index} name={name} />
          })}
      </QuestionListBody>
      <QuestionListFooter>
        {currCount < totalCount && <MoreAnsweredButton onClick={handleMoreAs}>MORE ANSWERED QUESTIONS</MoreAnsweredButton>}
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