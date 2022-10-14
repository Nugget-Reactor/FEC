import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const AnswerEntry = ({ entry }) => {

  return (
    <AnswerEntryContainer>
      <AnswerListHeader><b>A:</b> {entry.body}</AnswerListHeader>
      <AnswerListFooter>by {entry.answerer_name}, {format(parseISO(entry.date), 'MMMM dd, yyy')}</AnswerListFooter>
      <AnswerListFooter> | </AnswerListFooter>
      <AnswerListFooter>Helpful?</AnswerListFooter>
      <AddAnswerButton>Yes</AddAnswerButton>
      <AnswerListFooter>({entry.helpfulness})</AnswerListFooter>
      <AnswerListFooter> | </AnswerListFooter>
      <ReportButton>Report</ReportButton>
      <div>
        {!entry.photos.length
          ? null
          : <Image src={entry.photos[0]}></Image>}
      </div>
    </AnswerEntryContainer>
  )
}

export default AnswerEntry;

const AnswerListHeader = styled.div`
  display: block;
  margin: 10px;
`;

const AnswerListFooter = styled.div`
  display: inline-block;
  padding: 10px;
`;

const AnswerEntryContainer = styled.div`

`;

const AddAnswerButton = styled.button`
`;

const ReportButton = styled.button`
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
  margin: 10px;
`;