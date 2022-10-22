import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';

const QuestionEntry = ({ entry, name, query }) => {

  console.log('question entry', entry);

  const [showAModal, setShowAModal] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const handleAddAnswer = (e) => {
    e.preventDefault();
    setShowAModal(!showAModal);
  };

  const handleMarkHelpful = (e) => {
    e.preventDefault();
    axios.put(`/qa/questions/${entry.question_id}/helpful`)
      .then(results => {
        setHelpfulClicked(!helpfulClicked);
      })
      .catch(err => console.log('Error updating question helpfulness'));
  };

  const handleReportQ = (e) => {
    e.preventDefault();
    axios.put(`/qa/questions/${entry.question_id}/report`)
      .then(results => {
        setReportClicked(!reportClicked);
      })
      .catch(err => console.log('Error reporting question'));
  };

  // if entry.question body includes query context return this, else return null
  if (query.length < 3 || query.length >= 3 && entry.question_body.includes(query)) {
    return (
      <QuestionEntryContainer>
        <QuestionEntryHeader>
          <QuestionHeading><b>Q: {entry && entry.question_body}</b></QuestionHeading>
          <QuestionSubHeading>Helpful?</QuestionSubHeading>
          {helpfulClicked
            ? <HelpfulQ href="" onClick={e => e.preventDefault()}>Yes ({entry && entry.question_helpfulness + 1})</HelpfulQ>
            : <HelpfulQ href="" onClick={handleMarkHelpful}>Yes ({entry && entry.question_helpfulness})</HelpfulQ>}
          <QuestionSubHeading>|</QuestionSubHeading>
          {reportClicked
            ? <ReportQuestion href="" onClick={e => e.preventDefault()}>Reported</ReportQuestion>
            : <ReportQuestion href="" onClick={handleReportQ}>Report Question</ReportQuestion>}
          <QuestionSubHeading>|</QuestionSubHeading>
          <AddAnswer href="" onClick={e => handleAddAnswer(e)}>Add Answer</AddAnswer>
        </QuestionEntryHeader>
        <AnswerBody>
          {Object.keys(entry.answers).length !== 0 && <AnswersList questionID={entry.question_id}></AnswersList>}
          {showAModal && <AnswerModal showAModal={showAModal} setShowAModal={setShowAModal} questionBody={entry.question_body} questionName={name} questionID={entry.question_id} ></AnswerModal>}
        </AnswerBody>
      </QuestionEntryContainer>
    );
  }
};

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