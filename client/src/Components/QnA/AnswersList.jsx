import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const AnswersList = ({ answersObj }) => {

  const answersArr = [];
  for (let key in answersObj) {
    answersArr.push(answersObj[key]);
  }

  return (
    <div>
      <AnswerListHeader><b>A:</b> {answersArr[0].body}</AnswerListHeader>
      <Span>by {answersArr[0].answerer_name}, {format(parseISO(answersArr[0].date), 'MMMM dd, yyy')}</Span>
      <Span>Helpful?</Span>
      <Anchor>Yes ({answersArr[0].helpfulness})</Anchor>
      <Anchor>Report</Anchor>
      <div>
        {!answersArr[0].photos.length
          ? null
          : <Image src={answersArr[0].photos[0]}></Image>}
        <div>
          <Anchor>LOAD MORE ANSWERS</Anchor>
        </div>
      </div>
    </div>
  )
}

export default AnswersList;

const AnswerListHeader = styled.div`
  display: block;
  margin: 10px;
`;

const Paragraph = styled.p`
  padding: 10px;
`;

const Span = styled.span`
  padding: 10px;
`;

const Anchor = styled.a`
  padding: 10px;
`;

const Image = styled.img`
  height: 150px;
  width: 200px;
`;