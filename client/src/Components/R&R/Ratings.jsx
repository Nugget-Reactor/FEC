import React, { useEffect } from 'react';
import axios from 'axios';

const Ratings = () => {
  useEffect(() => {
    axios.get('/reviews')
      .then(res => console.log('results from reviews get', res.data))
      .catch(err => console.error('error getting reviews', err));
  }, []);
  //test
  return (
    <div>

    </div>
  );
}

export default Ratings;