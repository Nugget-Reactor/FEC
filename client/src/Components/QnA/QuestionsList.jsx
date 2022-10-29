import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import SearchQnA from './SearchQnA.jsx';
import styled from 'styled-components';

const QuestionsList = ({ questionsList, name, showQModal, setShowQModal, newProduct }) => {

  const [totalCount, setTotalCount] = useState(0);
  const [currCount, setCurrCount] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (newProduct) {
      setTotalCount(questionsList.length);
    } else {
      setCurrCount(0);
      setTotalCount(questionsList.length);
    }
  }, [questionsList]);

  const handleMoreAs = (e) => {
    e.preventDefault();
    setCurrCount(currCount + 2);
  };

  return (
    <QuestionListContainer data-testid="questions-list">
      <SearchQnA query={query} setQuery={setQuery} />
      <QuestionListBody>
        {(currCount < totalCount || currCount === totalCount || currCount === totalCount + 1) &&
          questionsList.map((question, index) => {
            if (index < currCount + 2) {
              return <QuestionEntry entry={question} key={index} name={name} query={query} />;
            }
          })}
      </QuestionListBody>
      <QuestionListFooter>
        {(currCount < totalCount) && <MoreQuestions onClick={handleMoreAs} data-testid="more-questions" aria-label="more-questions-button">MORE QUESTIONS</MoreQuestions>}
        <AddQButton onClick={() => setShowQModal(!showQModal)} data-testid="addq-button" aria-label="add-question-button">ADD A QUESTION +</AddQButton>
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
  max-height: 67vh;
`;

const QuestionListFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0px 20px;
`;

const AddQButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const MoreQuestions = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;