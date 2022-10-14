import React, {useState, useEffect} from 'react';
import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import Ratings from './R&R/Ratings.jsx';
import axios from 'axios';
import QnA from './QnA/QnA.jsx';

const App = () => {
  const [productId, setProductId] = useState(40343);

  return (
    <div>
      <OverviewApp />
      <QnA />
      <Ratings />
    </div>
  )
}

export default App;