import React, {useState, useEffect} from 'react';
import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import Ratings from './R&R/Ratings.jsx';
import axios from 'axios';

import QnA from './QnA/QnA.jsx';
import Ratings from './R&R/Ratings.jsx';

const App = () => {


  return (
    <div>
      <OverviewApp />
      <Ratings />
      <QnA />
<<<<<<< HEAD
    </div>
=======
      <Ratings />
    </>
>>>>>>> main
  )
}

export default App;