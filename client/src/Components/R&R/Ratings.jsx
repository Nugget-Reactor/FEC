import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';
import ModalForm from './ModalForm.jsx';

const placeholder = [{
  "review_id": 5,
  "rating": 3.8,
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
  "rating": 4.3,
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
const defaultMetadata = {
  "product_id": "2",
  "ratings": {
    2: 10,
    3: 1,
    4: 2,
    // ...
  },
  "recommended": {
    0: 5
    // ...
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    },
  }
}

const Ratings = ({ productID }) => {

  const [reviews, setReviews] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [sort, setSort] = useState('relevant');
  const [showModal, setShowModal] = useState(false);
  const sortRef = useRef();

  useEffect(() => {
    /* axios.get(`/reviews?product_id=${1}&sort=${sort}`)
    .then(res => {
      console.log(res.data)
      setReviews(res.data.results)
    })
    .catch(err => console.error(err)); */
    /*
    axios.get(`/reviews/meta?product_id=${1}`)
    .then(res => {
      console.log(res.data);
      setMetadata(res.data);
    })
    */
    setReviews(placeholder)
    setMetadata(defaultMetadata);
  }, []);

  const getReviewCount = () => {
    let total = 0;

    for (let count in metadata.ratings) {
      total += metadata.ratings[count];
    }
    return total;

  }

  return (
    <Layout>
      <h2>Ratings & Reviews</h2>
      <ColumnContainer>
        <div>
          overview
        </div>
        <div>
          <ReviewTitle>{getReviewCount()} reviews, sorted by
            <Dropdown ref={sortRef}>
              <option value='relevant'>relevance</option>
              <option value='helpful'>most helpful</option>
              <option value='newest'>newest</option>
            </Dropdown>
          </ReviewTitle>
          <List reviews={reviews} />

          <BigButton>MORE REVIEWS</BigButton>
          <BigButton onClick={() => setShowModal(true)}>ADD A REVIEW +</BigButton>
        </div>
      </ColumnContainer>
      {showModal ? <ModalForm setShowModal={setShowModal} /> : null}
    </Layout>
  );
}

const Layout = styled.div`
  margin: 20px 100px;
`

const BigButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
`
const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
const ReviewTitle = styled.h5`
  font-size: 1.25rem;
`
const Dropdown = styled.select`

`
export default Ratings;