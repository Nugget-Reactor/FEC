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
      <QuestionSubHeading>Helpful?</QuestionSubHeading>
      <HelpfulQ href="">Yes</HelpfulQ>
      <QuestionSubHeading>({entry && entry.question_helpfulness})</QuestionSubHeading>
      <QuestionSubHeading>|</QuestionSubHeading>
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
  font-size: 1.25rem;
`;

const QuestionSubHeading = styled.div`
  display: inline-block;
  padding: 5px;
  font-size: .8rem;
`;

const HelpfulQ = styled.a`
  font-size: .8rem;
`;

const AddAnswer = styled.a`
  font-size: .8rem;
`;