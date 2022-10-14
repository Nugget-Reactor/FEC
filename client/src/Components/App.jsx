import React, {useState, useEffect} from 'react';
import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import axios from 'axios';
import QnA from './QnA/QnA.jsx';
import Ratings from './R&R/Ratings.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = () => {


  return (
    <div>
      <OverviewApp />
      <RelatedItems />
      <QnA />
      <Ratings />
    </div>
  )
}

export default App;