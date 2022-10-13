import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';

const placeholder = [{
  "review_id": 5,
  "rating": 3,
  "summary": "I'm enjoying wearing these shades",
  "recommend": false,
  "response": null,
  "body": "Comfortable and practical.",
  "date": "2019-04-14T00:00:00.000Z",
  "reviewer_name": "shortandsweeet",
  "helpfulness": 5,
  "photos": [{
      "id": 1,
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
    },
    {
      "id": 2,
      "url": "urlplaceholder/review_5_photo_number_2.jpg"
    },
    // ...
  ]
},
{
  "review_id": 3,
  "rating": 4,
  "summary": "I am liking these glasses",
  "recommend": true,
  "response": "Glad you're enjoying the product!",
  "body": "They are very dark. But that's good because I'm in very sunny spots",
  "date": "2019-06-23T00:00:00.000Z",
  "reviewer_name": "bigbrotherbenjamin",
  "helpfulness": 5,
  "photos": [],
},
]
const Ratings = () => {

  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');

  useEffect(() => {
    /* axios.get(`/reviews?product_id=${1}&sort=${sort}`)
    .then(res => {
      console.log(res.data)
      setReviews(res.data.results)
    })
    .catch(err => console.error(err)); */
    setReviews(placeholder)
  }, []);

  console.log(reviews);

  return(
    <div>
      <h2>Ratings & Reviews</h2>
      <List reviews={reviews} />
    </div>
  );
}

export default Ratings;