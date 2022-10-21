import React, { useState } from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const AnswerEntry = ({ entry }) => {

  // console.log(entry);

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

  let reader = new FileReader();
  reader.addEventListener('load', () => {
    console.log('done loading with', reader.result);
  }, false);

  // console.log('answer entry photos', entry.photos);

  return (
    <AnswerEntryContainer data-testid="answer-entry">
      <AnswerListHeader><b>A:</b> {entry.body}</AnswerListHeader>
      <PhotoContainer>
        {!entry.photos.length
          ? null
          : <Image src={entry.photos[0].url}></Image>}
      </PhotoContainer>
      <AnswerListFooter>
        <AnswerListDiv>by {entry.answerer_name}, {format(parseISO(entry.date), 'MMMM dd, yyy')}</AnswerListDiv>
        <AnswerListDiv> | </AnswerListDiv>
        <AnswerListDiv>Helpful?</AnswerListDiv>
        {helpfulClicked
          ? <AddAnswer href="" onClick={e => e.preventDefault()}>Yes ({entry.helpfulness + 1})</AddAnswer>
          : <AddAnswer href="" onClick={handleMarkAHelpful}>Yes ({entry.helpfulness})</AddAnswer>}
        <AnswerListDiv> | </AnswerListDiv>
        {reportClicked
          ? <ReportAnswer href="" onClick={e => e.preventDefault()}>Reported</ReportAnswer>
          : <ReportAnswer href="" onClick={handleReportA}>Report Answer</ReportAnswer>}
      </AnswerListFooter>
    </AnswerEntryContainer>
  );
};

export default AnswerEntry;

const AnswerListHeader = styled.div`
  display: block;
  padding: 5px;
  font-size: 1rem;
`;

const AnswerListFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .5rem .5rem 1.2rem 1.75rem;
  font-size: .9rem;
`;

const AnswerListDiv = styled.div`
  padding: 5px;
`;

const AnswerEntryContainer = styled.div`
  padding: 5px;
`;

const PhotoContainer = styled.div`
`;

const AddAnswer = styled.a`
  font-size: .9rem;
`;

const ReportAnswer = styled.a`
  font-size: .9rem;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
  padding: .5rem 1.75rem .5rem;
`;