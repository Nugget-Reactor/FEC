import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';
import ModalForm from './ModalForm.jsx';
import Modal from './Modal.jsx';
import Breakdown from './Breakdown.jsx';

const Reviews = ({ productID, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [sort, setSort] = useState('relevant');
  const [currentCount, setCurrentCount] = useState(2);
  const [filteredTotalCount, setFilteredTotalCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState([]);

  //Set initial reviews list
  useEffect(() => {
    if(productID !== undefined) {
      axios.get(`/reviews?product_id=${productID}&sort=${sort}&count=${currentCount}`)
      .then(res => {
        setReviews(res.data.results)
      })
      .catch(err => console.error(err));
    }
  }, [productID, sort, currentCount]);

  //Set filtered reviews list
  useEffect(() => {
    if(filters.length > 0) {
      let filtered = reviews.filter((review) => {
        return filters.includes(review.rating);
      })
      setFilteredReviews(filtered);
    } else {
      setFilteredReviews(reviews);
    }
  }, [reviews, filters]);

  //Set metadata
  useEffect(() => {
    if(productID !== undefined) {
      axios.get(`/reviews/meta?product_id=${productID}`)
      .then(res => {
        setMetadata(res.data);
      })
      .catch(err => console.error(err));
    }
  }, [productID]);

  //Set total reviews count and filtered reviews count
  useEffect(() => {
    getReviewCount();
  }, [metadata, filters])

  const getReviewCount = () => {
    let total = 0;

    if(filters.length > 0 && metadata.ratings) {
      filters.forEach((filter) => {
        total += Number(metadata.ratings[filter]);
      })
      setFilteredTotalCount(total);
    }
    total = 0;
    for(let count in metadata.ratings) {
      total += Number(metadata.ratings[count]);
    }
    setTotalCount(total)

  }

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const handleMoreReviews = () => {
    setCurrentCount(currentCount + 2);
  }

  return (
    <Layout>
      <h2>Ratings & Reviews</h2>
      <ColumnContainer>
        <div style={{width: "500px"}}>
          <Breakdown metadata={metadata} totalCount={totalCount} />
        </div>
        <div>
          <ReviewTitle data-testid="reviewTitle">{filteredTotalCount || totalCount} reviews, sorted by
            <Dropdown value={sort} onChange={handleSort}>
              <option value='relevant'>relevance</option>
              <option value='helpful'>most helpful</option>
              <option value='newest'>newest</option>
            </Dropdown>
          </ReviewTitle>
          <List reviews={filteredReviews} />

          {totalCount >= currentCount ? <BigButton onClick={handleMoreReviews}>MORE REVIEWS</BigButton> : null}
          <BigButton data-testid="addReviewButton" onClick={() => setShowModal(true)}>ADD A REVIEW +</BigButton>
        </div>
      </ColumnContainer>
      {showModal ? <Modal setShowModal={setShowModal}><ModalForm productName={productName} /></Modal> : null}
    </Layout>
  );
}

const Layout = styled.div`
  width: 75%;
  margin: 0 auto;
`

const BigButton = styled.button`
  border-radius: 0;
  padding: 15px;
  font-weight: 700;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
`
const ColumnContainer = styled.div`
  display: flex;

  justify-content: space-around;
  gap: 50px;
`
const ReviewTitle = styled.h5`
  font-size: 1.25rem;
`
const Dropdown = styled.select`
  margin: 0 10px;
  font-size: inherit;
  cursor: pointer;
`
export default Reviews;