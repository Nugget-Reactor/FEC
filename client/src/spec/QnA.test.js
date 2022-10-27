/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent, act } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleQuestion } from './sampleData/QnA/sampleQuestionData.js';
import { sampleQProduct } from './sampleData/QnA/sampleQuestionProduct.js';
import { sampleAnswer } from './sampleData/QnA/sampleAnswerData.js';

import QnA from '../Components/QnA/QnA.jsx';
import QuestionsList from '../Components/QnA/QuestionsList.jsx';
import SearchQnA from '../Components/QnA/SearchQnA.jsx';
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

describe('renders Questions List in QnA Widget', () => {
  afterEach(cleanup);


  it('Questions List should render', () => {
    const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

    expect(getByTestId('questions-list')).toBeInTheDocument();

    // screen.debug();
  });

  it('Questions List should render with more questions and add question buttons', () => {
    const { getByTestId } = render(<QuestionsList questionsList={sampleQuestion.results} name={sampleQProduct.name} />);

    expect(getByTestId('more-questions')).toBeInTheDocument();
    expect(getByTestId('addq-button')).toBeInTheDocument();

    // screen.debug();
  });
});

describe('renders Search component in QnA Widget', () => {
  afterEach(cleanup);

  it('Search component should render with input field', () => {
    const { getByTestId } = render(<SearchQnA query={''} />);

    expect(getByTestId('search-qna')).toBeInTheDocument();

    // screen.debug();
  });
});

describe('renders Questions Entry in QnA Widget', () => {
  afterEach(cleanup);

  it('Question Entry should render', () => {
    const { getByTestId } = render(<QuestionEntry entry={sampleQuestion.results[0]} name={sampleQProduct.name} query={''} />);

    expect(getByTestId('question-headers')).toBeInTheDocument();

    // screen.debug();
  });

  it('Question Entry should render with headings on entry and load more answers link', () => {
    const { getByTestId } = render(<QuestionEntry entry={sampleQuestion.results[0]} name={sampleQProduct.name} query={''} />);

    expect(screen.getByText(/Helpful/i)).toBeInTheDocument();
    expect(screen.getByText(/Yes/i)).toBeInTheDocument();
    expect(screen.getByText(/Report Question/i)).toBeInTheDocument();
    expect(screen.getByText(/LOAD MORE ANSWERS/i)).toBeInTheDocument();

    // screen.debug();
  });
});

describe('renders Answer Entry in QnA Widget', () => {
  afterEach(cleanup);

  it('Answer Entry should render', () => {
    const { getByTestId } = render(<AnswerEntry entry={sampleQuestion.results[0].answers[3086368]} />);

    expect(getByTestId('answer-footer')).toBeInTheDocument();

    // screen.debug();
  });

  it('Answer Entry should render with headings on entry', () => {
    const { getByTestId } = render(<AnswerEntry entry={sampleQuestion.results[0].answers[3086368]} />);

    expect(screen.getByText(/Helpful/i)).toBeInTheDocument();
    expect(screen.getByText(/Yes/i)).toBeInTheDocument();
    expect(screen.getByText(/Report Answer/i)).toBeInTheDocument();

    // screen.debug();
  });
});

describe('renders Answers List in QnA Widget', () => {
  afterEach(cleanup);


  it('Answers List should render', () => {
    const { getByTestId } = render(<AnswersList questionID={sampleQuestion.results[0].question_id} answersList={sampleAnswer.results} setAnswersList={() => { }} />);

    expect(getByTestId('answers-list')).toBeInTheDocument();

    // screen.debug();
  });

  it('Answers List should render with ', () => {
    const { getByTestId } = render(<AnswersList questionID={sampleQuestion.results[0].question_id} answersList={sampleAnswer.results} setAnswersList={() => { }} />);

    expect(screen.getByText(/LOAD MORE ANSWERS/i)).toBeInTheDocument();

    // screen.debug();
  });
});