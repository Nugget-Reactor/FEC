import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { sampleQuestion } from './sampleData/QnA/sampleQuestionData.js';

// import QnA from '../Components/QnA/QnA.jsx';
// import SearchQnA from '../Components/QnA/SearchQnA.jsx';
// import QuestionsList from '../Components/QnA/QuestionsList.jsx';
// import QuestionModal from '../Components/QnA/QuestionModal.jsx';

import AnswerEntry from '../Components/QnA/AnswerEntry.jsx';
import AnswersList from '../Components/QnA/AnswersList.jsx';

// console.log(sampleQuestion);

describe('renders Answers from QnA Widget', () => {
  it('renders Answer Entry component', () => {
    render(<AnswerEntry entry={sampleQuestion.results[0].answers['3086367']} />);

    const AnswerEntryElement = screen.getByTestId("answer-entry");
    expect(AnswerEntryElement).toBeInTheDocument();
    // screen.debug();
  });

  it('renders Answers List component', () => {
    render(<AnswersList answersObj={sampleQuestion.results[0].answers} />);
  });
});

// describe('true is truthy', () => {
//   test('true is truthy', () => {
//     expect(true).toBe(true);
//   });
// });