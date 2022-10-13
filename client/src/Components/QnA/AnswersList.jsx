import React from 'react';
import styled from 'styled-components';

const AnswersList = ({ answersObj }) => {
  return (
    <div>
      <Paragraph>A: {answersObj[3073699].body}</Paragraph>
      <Span>by {answersObj[3073699].answerer_name}, {answersObj[3073699].date}</Span>
      <Span>Helpful?</Span>
      <Anchor>Yes ({answersObj[3073699].helpfulness})</Anchor>
      <Anchor>Report</Anchor>
      <div>
        {!answersObj[3073699].photos.length
          ? null
          : <Image src={answersObj[3073699].photos[0]}></Image>}
        <div>
          <Anchor>LOAD MORE ANSWERS</Anchor>
        </div>
      </div>
    </div>
  )
}

export default AnswersList;

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