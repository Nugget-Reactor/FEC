import React from 'react';
import AnswersList from './AnswersList.jsx';

const QuestionsList = ({ questionsList }) => {
  return (
    <div>
      {questionsList.length > 2
        ? /* only return top 2 */
        : /* return up to 2 avail */}
      <span>Q: Who what which when where why whether how</span>
      <span>Helpful?</span>
      <a>Yes (#)</a>
      <AnswersList />
    </div>
  )
}

export default QuestionsList;