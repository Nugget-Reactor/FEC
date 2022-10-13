import React, {useState, useEffect} from 'react';
import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import axios from 'axios';
import Ratings from './R&R/ratings.jsx';

const App = () => {


  return (
    <div>
      <OverviewApp />
      Hello World
      <Ratings />
    </div>
  )
}

export default App;