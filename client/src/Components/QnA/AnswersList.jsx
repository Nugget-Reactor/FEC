import React from 'react';

const AnswersList = ({ answersObj }) => {
  return (
    <div id="AnswersList">
      <p>A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
      <span>by [Username], Month DD, YYYY</span>
      <span>Helpful?</span>
      <a>Yes (#)</a>
      <a>Report</a>
      <div>
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.406.305.suffix/1383770571120.jpeg" width="200px" height="100px"></img>
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.406.305.suffix/1383770571120.jpeg" width="200px" height="100px"></img>
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.406.305.suffix/1383770571120.jpeg" width="200px" height="100px"></img>
        <div>
          <a>LOAD MORE ANSWERS</a>
        </div>
      </div>
    </div>
  )
}

export default AnswersList;