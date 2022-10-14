import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
import AnswerModal from './AnswerModal.jsx';

const QuestionEntry = ({ entry }) => {

  const [showAModal, setShowAModal] = useState(false);

  const handleAddAnswer = (e) => {
    e.preventDefault();
    setShowAModal(!showAModal);
  }

  return (
    <div>
      <QuestionHeading>Q: {entry && entry.question_body}</QuestionHeading>
      <QuestionHeading>Helpful?</QuestionHeading>
      <Button>Yes</Button>
      <QuestionHeading>({entry && entry.question_helpfulness})</QuestionHeading>
      <QuestionHeading>|</QuestionHeading>
      <Button onClick={e => handleAddAnswer(e)}>Add Answer</Button>
      <AnswersList answersObj={entry.answers} />
      {showAModal && <AnswerModal></AnswerModal>}
    </div>
  )
}

export default QuestionEntry;

const QuestionHeading = styled.div`
  display: inline-block;
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px;
`;