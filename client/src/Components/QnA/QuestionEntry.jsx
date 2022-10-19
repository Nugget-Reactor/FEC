import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
import AnswerModal from './AnswerModal.jsx';

const QuestionEntry = ({ entry, name }) => {

  const [showAModal, setShowAModal] = useState(false);

  const handleAddAnswer = (e) => {
    e.preventDefault();
    setShowAModal(!showAModal);
  }

  return (
    <QuestionEntryContainer>
      <QuestionEntryHeader>
        <QuestionHeading><b>Q: {entry && entry.question_body}</b></QuestionHeading>
        <QuestionSubHeading>Helpful?</QuestionSubHeading>
        <HelpfulQ href="">Yes ({entry && entry.question_helpfulness})</HelpfulQ>
        <QuestionSubHeading>|</QuestionSubHeading>
        <ReportQuestion href="">Report Question</ReportQuestion>
        <QuestionSubHeading>|</QuestionSubHeading>
        <AddAnswer href="" onClick={e => handleAddAnswer(e)}>Add Answer</AddAnswer>
      </QuestionEntryHeader>
      <AnswerBody>
        {Object.keys(entry.answers).length !== 0 && <AnswersList answersObj={entry.answers} ></AnswersList>}
        {showAModal && <AnswerModal showAModal={showAModal} setShowAModal={setShowAModal} body={entry.question_body} name={name} question_id={entry.question_id} ></AnswerModal>}
      </AnswerBody>
    </QuestionEntryContainer>
  )
}

export default QuestionEntry;

const QuestionEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const QuestionEntryHeader = styled.div`
  display: inline-block;
  padding: 5px;
`;

const QuestionHeading = styled.div`
  display: inline-flex;
  padding: 10px;
  font-size: 1.25rem;
`;

const QuestionSubHeading = styled.div`
  display: inline-flex;
  padding: 5px;
  font-size: .9rem;
`;

const ReportQuestion = styled.a`
  font-size: .9rem;
`;

const AnswerBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelpfulQ = styled.a`
  font-size: .9rem;
`;

const AddAnswer = styled.a`
  font-size: .9rem;
  padding: 5px;
  right: 0;
`;