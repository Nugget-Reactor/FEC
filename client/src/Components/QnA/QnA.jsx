import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchQnA from './SearchQnA.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionModal from './QuestionModal.jsx';

const QnA = () => {

  const [showQModal, setShowQModal] = useState(false);

  useEffect(() => {
    axios.get('/questions')
      .then(results => console.log('results data for questions component', results.data))
      .catch(err => console.log('questions error', err))
  }, [])

  const handleAddQ = (e) => {
    e.preventDefault();
    setShowQModal(!showQModal)
  }

  return (
    <div id="QnA">
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQnA />
      <QuestionsList />
      <button>More Answered Questions</button><button onClick={handleAddQ}>Add A Question</button>
      {showQModal ? <QuestionModal /> : null}
    </div>
  )
}

export default QnA;