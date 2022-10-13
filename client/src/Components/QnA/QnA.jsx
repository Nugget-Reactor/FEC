import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchQnA from './SearchQnA.jsx';

const QnA = () => {

  useEffect(() => {
    axios.get('/questions')
      .then(results => console.log('results data', results.data))
      .catch(err => console.log('questions error', err))
  }, [])

  return (
    <div id="QnA">
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQnA />
    </div>
  )
}

export default QnA;