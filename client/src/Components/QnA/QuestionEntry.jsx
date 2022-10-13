import React from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';

const QuestionEntry = ({ entry }) => {
  return (
    <div>
      <Span>Q: {entry && entry.question_body}</Span>
      <Span>Helpful?</Span>
      <Anchor>Yes ({entry && entry.question_helpfulness})</Anchor>
      <AnswersList answersObj={entry.answers} />
    </div>
  )
}

export default QuestionEntry;

const Span = styled.span`
  padding: 10px;
`;

const Anchor = styled.a`
  padding: 10px;
`;