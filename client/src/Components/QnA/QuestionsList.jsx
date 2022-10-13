import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({ questionsList }) => {

  const [sortedQs, setSortedQs] = useEffect([]);

  // useEffect(() => {

  // }, [])

  return (
    <div>
      {questionsList.length > 2
        ? <><QuestionEntry entry={questionsList[0]} /></>
        : <QuestionEntry entry={questionsList[0]} />}
    </div>
  )
}

export default QuestionsList;