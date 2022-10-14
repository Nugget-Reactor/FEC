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
      <QuestionHeading><b>Q: {entry && entry.question_body}</b></QuestionHeading>
      <QuestionHeading>Helpful?</QuestionHeading>
      <HelpfulQ href="">Yes</HelpfulQ>
      <QuestionHeading>({entry && entry.question_helpfulness})</QuestionHeading>
      <QuestionHeading>|</QuestionHeading>
      <AddAnswer href="" onClick={e => handleAddAnswer(e)}>Add Answer</AddAnswer>
      <AnswersList answersObj={entry.answers} />
      {showAModal && <AnswerModal handleClick={handleAddAnswer}></AnswerModal>}
    </div>
  )
}

export default QuestionEntry;

const QuestionHeading = styled.div`
  display: inline-block;
  padding: 10px;
`;

const HelpfulQ = styled.a`
`;

const AddAnswer = styled.a`

`;