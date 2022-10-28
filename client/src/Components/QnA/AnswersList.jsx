import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = ({ questionID, answersList, setAnswersList }) => {

  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    axios.get(`/qa/questions/${questionID}/answers`)
      .then(results => {
        // console.log('got answers list');
        setAnswersList(results.data.results);
      })
      .catch(err => console.log('Error getting answers list', err));
  }, [questionID, showLoadMore]);

  useEffect(() => {
    setAnswersList(answersList);
  }, [answersList]);

  useEffect(() => {
    setShowLoadMore(!showLoadMore);
  }, []);

  const handleLoadMoreAs = (e) => {
    e.preventDefault();
    setShowLoadMore(!showLoadMore);
  };

  return (
    <AnswersContainer data-testid="answers-list">
      {showLoadMore && answersList
        ? answersList.map((answer, index) => {
          if (index < 2) {
            return <AnswerEntry entry={answer} key={index} />;
          }
        })
        : answersList.map((answer, index) => {
          return <AnswerEntry entry={answer} key={index} />;
        })}
      {showLoadMore
        ? <LoadMoreAnswers href="" onClick={handleLoadMoreAs}>LOAD MORE ANSWERS</LoadMoreAnswers>
        : <LoadMoreAnswers href="" onClick={handleLoadMoreAs}>COLLAPSE LIST</LoadMoreAnswers>}
    </AnswersContainer>
  );
};

export default AnswersList;

const AnswersContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const LoadMoreAnswers = styled.a`
  display: block;
  align-self: start;
  margin: 10px;
  font-size: .8em;
`;