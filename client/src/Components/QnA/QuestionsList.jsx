import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import SearchQnA from './SearchQnA.jsx';
import styled from 'styled-components';

const QuestionsList = ({ questionsList, name, showQModal, setShowQModal }) => {

  const [totalCount, setTotalCount] = useState(0);
  const [currCount, setCurrCount] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTotalCount(questionsList.length);
  }, [questionsList]);

  // console.log('QuestionsList totalCount', totalCount);

  const handleMoreAs = (e) => {
    e.preventDefault();
    setCurrCount(currCount + 2);
  };

  return (
    <QuestionListContainer>
      <SearchQnA query={query} setQuery={setQuery} />
      <QuestionListBody>
        {currCount < totalCount
          ? questionsList.map((question, index) => {
            if (index < currCount + 2) {
              return <QuestionEntry entry={question} key={index} name={name} query={query} />;
            }
          })
          : questionsList.map((question, index) => {
            return <QuestionEntry entry={question} key={index} name={name} query={query} />;
          })}
      </QuestionListBody>
      <QuestionListFooter>
        {currCount < totalCount && <MoreAnsweredButton onClick={handleMoreAs} data-testid="more-questions">MORE ANSWERED QUESTIONS</MoreAnsweredButton>}
        <AddQButton onClick={() => setShowQModal(!showQModal)} data-testid="addq-button">ADD A QUESTION +</AddQButton>
      </QuestionListFooter>
    </QuestionListContainer>
  );
};

export default QuestionsList;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionListBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: 70vw;
  max-height: 80vh;
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
  cursor: pointer;
`;

const MoreAnsweredButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
`;