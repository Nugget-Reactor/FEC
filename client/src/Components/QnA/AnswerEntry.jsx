import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const AnswerEntry = ({ entry }) => {

  return (
    <AnswerEntryContainer>
      <AnswerListHeader><b>A:</b> {entry.body}</AnswerListHeader>
      <PhotoContainer>
        {!entry.photos.length
          ? null
          : <Image src={entry.photos[0]}></Image>}
      </PhotoContainer>
      <AnswerListFooter>by {entry.answerer_name}, {format(parseISO(entry.date), 'MMMM dd, yyy')}</AnswerListFooter>
      <AnswerListFooter> | </AnswerListFooter>
      <AnswerListFooter>Helpful?</AnswerListFooter>
      <AddAnswer href="">Yes</AddAnswer>
      <AnswerListFooter>({entry.helpfulness})</AnswerListFooter>
      <AnswerListFooter> | </AnswerListFooter>
      <Report href="">Report</Report>
    </AnswerEntryContainer>
  )
}

export default AnswerEntry;

const AnswerListHeader = styled.div`
  display: block;
  margin: 10px;
  font-size: 1.1rem;
`;

const AnswerListFooter = styled.div`
  display: inline-block;
  padding: 5px;
  font-size: .9rem;
`;

const AnswerEntryContainer = styled.div`
`;

const PhotoContainer = styled.div`
`;

const AddAnswer = styled.a`
  font-size: .9rem;
`;

const Report = styled.a`
  font-size: .9rem;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
  margin: 10px;
`;