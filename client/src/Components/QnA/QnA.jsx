import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchQnA from './SearchQnA.jsx';
import QuestionsList from './QuestionsList.jsx';

const QnA = () => {

  useEffect(() => {
    axios.get('/questions')
      .then(results => console.log('results data for questions component', results.data))
      .catch(err => console.log('questions error', err))
  }, [])

  return (
    <div id="QnA">
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQnA />
      <QuestionsList />
      <button>More Answered Questions</button><button>Add A Question</button>
    </div>
  )
}

export default QnA;