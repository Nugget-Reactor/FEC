/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent, act } from '@testing-library/react';
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

describe('renders QnA Widget', () => {
  afterEach(cleanup);

  it('Questions widget should render using passed down sample question', () => {
    const { getByTestId } = render(<QnA product={sampleQuestion} />);

    expect(screen.getByText(/Questions & Answers/i)).toBeInTheDocument();

    // screen.debug();
  });
});

describe('renders Questions List from QnA Widget', () => {
  afterEach(cleanup);


  it('Questions List should render', () => {
    const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

    expect(getByTestId('questions-list')).toBeInTheDocument();

    // screen.debug();
  });

  it('Questions List should render with more questions button', () => {
    const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

    expect(getByTestId('more-questions')).toBeInTheDocument();

    // screen.debug();
  });

  it('Questions List should render with add question button', () => {
    const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

    expect(getByTestId('addq-button')).toBeInTheDocument();

    screen.debug();
  });
});