import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({ questionsList }) => {

  // useEffect(() => {
  //   questionsList
  // }, [])

  return (
    <div>
      {questionsList.length > 2
        ? questionsList.map((question, index) => {
          if (index < 2) {
            return <QuestionEntry entry={question} key={index} />
          }
        })
        : questionsList.map((question, index) => {
          return <QuestionEntry entry={question} key={index} />
        })}
    </div>
  )
}

export default QuestionsList;