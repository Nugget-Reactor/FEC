import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QnA from './QnA/QnA.jsx';
import Ratings from './R&R/Ratings.jsx';

const App = () => {


  return (
    <>
      <div>
        Hello World
      </div>
      <QnA />
      <Ratings />
    </>
  )
}

export default App;