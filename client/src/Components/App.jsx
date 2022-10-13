import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import QnA from './QnA/QnA.jsx';
import Ratings from './R&R/Ratings.jsx';

const App = () => {


  return (
    <div>
      <OverviewApp />
      <QnA />
      <Ratings />
    </div>
  )
}

export default App;