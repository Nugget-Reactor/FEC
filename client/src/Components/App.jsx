import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QnA from './QnA/QnA.jsx';
import Ratings from './R&R/Ratings.jsx';

const App = () => {
  const [productId, setProductId] = useState(40343);

  return (
    <>
      <QnA />
      <Ratings productId={productId} />
    </>
  )
}

export default App;