import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({ questionsList }) => {
  return (
    <div>
      {questionsList.length > 2
        ? <><QuestionEntry entry={questionsList[0]} />
          <QuestionEntry entry={questionsList[1]} /></>
        : <QuestionEntry entry={questionsList[0]} />}
    </div>
  )
}

export default QuestionsList;