import React from 'react';
import AnswersList from './AnswersList.jsx';

const QuestionsList = () => {
  return (
    <div id="QuestionsList">
      <span>Q: Who what which when where why whether how</span>
      <span>Helpful?</span>
      <a>Yes (#)</a>
      <AnswersList />
    </div>
  )
}

export default QuestionsList;