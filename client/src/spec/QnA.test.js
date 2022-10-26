/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleQuestion } from './sampleData/QnA/sampleQuestionData.js';
import { sampleQProduct } from './sampleData/QnA/sampleQuestionProduct.js';

import QnA from '../Components/QnA/QnA.jsx';
import QuestionsList from '../Components/QnA/QuestionsList.jsx';
import Search from '../Components/QnA/SearchQnA.jsx';
import QuestionEntry from '../Components/QnA/QuestionEntry.jsx';
import AnswerEntry from '../Components/QnA/AnswerEntry.jsx';
import AnswersList from '../Components/QnA/AnswersList.jsx';
import QuestionModal from '../Components/QnA/QuestionModal.jsx';
import AnswerModal from '../Components/QnA/AnswerModal.jsx';

// console.log(sampleQuestion);
// LOOK INTO WAITFOR

describe('renders QnA Widget with Add Question button', () => {
  afterEach(cleanup);

  it('Questions widget should render with an add question button', () => {
    const { getByTestId } = render(<QnA product={sampleQuestion} />);

    expect(screen.getByText(/Questions & Answers/i)).toBeInTheDocument();
    expect(getByTestId('addq-button')).toBeInTheDocument();

    screen.debug();
  });
});

// describe('renders Questions List from QnA Widget', () => {
//   afterEach(cleanup);

//   it('Questions List should render', async () => {
//     const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

//     expect(screen.getAllByText(/Helpful/i)).toBeInTheDocument();
//     expect(getByTestId('questions-list')).toBeInTheDocument();

//     screen.debug();
//   })
// });

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