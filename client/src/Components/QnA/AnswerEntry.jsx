import React, { useState } from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const AnswerEntry = ({ entry }) => {

  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const handleMarkAHelpful = (e) => {
    e.preventDefault();
    axios.put(`/qa/answers/${entry.answer_id}/helpful`)
      .then(results => {
        setHelpfulClicked(!helpfulClicked);
      })
      .catch(err => console.log('Error updating answer helpfulness'));
  };

  const handleReportA = (e) => {
    e.preventDefault();
    axios.put(`/qa/answers/${entry.answer_id}/report`)
      .then(results => {
        setReportClicked(!reportClicked);
      })
      .catch(err => console.log('Error updating answer helpfulness'));
  };

  return (
    <AnswerEntryContainer data-testid="answer-entry">
      <AnswerListHeader><b>A:</b> {entry.body}</AnswerListHeader>
      <PhotoContainer>
        {!entry.photos.length
          ? null
          : entry.photos.map((photo, index) => {
            return <Image src={photo.url} key={index} alt="answer-entry-photo"></Image>;
          })}
      </PhotoContainer>
      <AnswerListFooter data-testid="answer-footer">
        <AnswerListDiv>by {entry.answerer_name}, {format(parseISO(entry.date), 'MMMM dd, yyy')}</AnswerListDiv>
        <AnswerListDiv> | </AnswerListDiv>
        <AnswerListDiv>Helpful?</AnswerListDiv>
        {helpfulClicked
          ? <AddAnswer href="" onClick={e => e.preventDefault()} aria-label="answer-is-helpful">Yes ({entry.helpfulness + 1})</AddAnswer>
          : <AddAnswer href="" onClick={handleMarkAHelpful} aria-label="answer-helpful">Yes ({entry.helpfulness})</AddAnswer>}
        <AnswerListDiv> | </AnswerListDiv>
        {reportClicked
          ? <ReportAnswer href="" onClick={e => e.preventDefault()} aria-label="reported-answer">Reported</ReportAnswer>
          : <ReportAnswer href="" onClick={handleReportA} aria-label="report-answer">Report Answer</ReportAnswer>}
      </AnswerListFooter>
    </AnswerEntryContainer>
  );
};

export default AnswerEntry;

const AnswerListHeader = styled.div`
  display: block;
  padding: 5px;
  overflow-wrap: anywhere;
`;

const AnswerListFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem .5rem 1.2rem 1.75rem;
  font-size: .8em;
`;

const AnswerListDiv = styled.div`
  padding: 5px;
`;

const AnswerEntryContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const PhotoContainer = styled.div`
`;

const AddAnswer = styled.a`
`;

const ReportAnswer = styled.a`
`;

const Image = styled.img`
  height: 100px;
  width: 150px;
  padding: .5rem;
`;