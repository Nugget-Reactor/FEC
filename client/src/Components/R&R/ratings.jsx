import React, { useEffect } from 'react';
import axios from 'axios';

const Ratings = () => {
  useEffect(() => {
    axios.get('/reviews')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  }, []);

  return(
    <div>

    </div>
  );
}

export default Ratings;