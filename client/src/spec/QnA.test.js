/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleQuestion } from './sampleData/QnA/sampleQuestionData.js';

import QnA from '../Components/QnA/QnA.jsx';

// import AnswerEntry from '../Components/QnA/AnswerEntry.jsx';
// import AnswersList from '../Components/QnA/AnswersList.jsx';

// console.log(sampleQuestion);
// LOOK INTO WAITFOR

describe('renders Answers from QnA Widget', () => {
  afterEach(cleanup);

  it('Questions widget should render', async () => {
    const { getByTestId } = render(<QnA product={sampleQuestion} />);

    expect(screen.getByText(/Questions & Answers/i)).toBeInTheDocument();
    expect(getByTestId('addq-button')).toBeInTheDocument();

    screen.debug();

    // const reviewTitle = await waitFor(() => getByTestId('reviewTitle'));

    // expect(reviewTitle).toHaveTextContent('0 reviews');
  })
});

// describe('true is truthy', () => {
//   test('true is truthy', () => {
//     expect(true).toBe(true);
//   });
// });

/*
it('renders Answer Entry component', () => {
    render(<AnswerEntry entry={sampleQuestion.results[0].answers['3086367']} />);

    const AnswerEntryElement = screen.getByTestId("answer-entry");
    expect(AnswerEntryElement).toBeInTheDocument();
    // screen.debug();
  });

  it('renders Answers List component', () => {
    render(<AnswersList answersObj={sampleQuestion.results[0].answers} />);
  });
*/