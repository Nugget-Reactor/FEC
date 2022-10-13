import React, { useEffect } from 'react';
import axios from '../../env/config.js';

const Ratings = () => {
  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products')
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, []);

  return(
    <div>

    </div>
  );
}

export default Ratings;