import React from 'react';

const QuestionModal = () => {
  return (
    <>
      <h3>Ask Your Question</h3>
      <h5>About the [Product Name Here]</h5>
      <form>
        <div>
          <label>Your Question*: </label>
          <input />
        </div>
        <div>
          <label>What is your Nickname*: </label>
          <input />
        </div>
        <div>
          <label>Your Email*: </label>
          <input />
        </div>
        <div>
          <button>Submit Question</button>
        </div>
      </form>
    </>
  )
}

export default QuestionModal;