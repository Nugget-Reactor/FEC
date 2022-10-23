import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';
import ModalForm from './ModalForm.jsx';
import Modal from './Modal.jsx';
import Breakdown from './Breakdown.jsx';

const Reviews = ({ productID, productName, currentMeta }) => {

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [currentCount, setCurrentCount] = useState(2);
  const [getCount, setGetCount] = useState(50);
  const [filteredTotalCount, setFilteredTotalCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState([]);

  //Set initial reviews list
  useEffect(() => {
    if(productID !== undefined) {
      axios.get(`/reviews?product_id=${productID}&sort=${sort}&count=${getCount}`)
      .then(res => {
        setReviews(res.data.results)
      })
      .catch(err => console.error(err));
    }
  }, [productID, sort, getCount]);

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

  //reset filters
  useEffect(() => {
    setFilters([]);
  }, [productID]);

  //Set filtered reviews count
  useEffect(() => {
    let filteredTotal = 0;

    filters.forEach((filter) => {
      filteredTotal += Number(currentMeta.ratings[filter]);
    })
    setFilteredTotalCount(filteredTotal);
  }, [currentMeta, filters]);

  //Set total reviews count
  useEffect(() => {
    let total = 0;
    for(let count in currentMeta.ratings) {
      total += Number(currentMeta.ratings[count]);
    }
    setTotalCount(total);
  }, [currentMeta]);

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const handleMoreReviews = () => {
    if(currentCount >= getCount) {
      setGetCount(getCount + 50);
    }
    setCurrentCount(currentCount + 2);
  }

  const modifyFilters = (starValue) => {
    if(!starValue) {
      setFilters([]);
    } else {
      setFilters(previousFilters => {
        if(previousFilters.includes(starValue)){
          return previousFilters.filter(value=> value!==starValue);
        } else {
          return [...previousFilters, starValue];
        }
      });
    }
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <Layout>
      <h2>Ratings & Reviews</h2>
      <ColumnContainer>
        <div style={{width: "500px"}}>
          <Breakdown currentMeta={currentMeta} totalCount={totalCount} filters={filters} modifyFilters={modifyFilters} />
        </div>
        <div>
          <ReviewTitle data-testid="reviewTitle">{filteredTotalCount || totalCount} reviews, sorted by
            <Dropdown value={sort} onChange={handleSort}>
              <option value='relevant'>relevance</option>
              <option value='helpful'>most helpful</option>
              <option value='newest'>newest</option>
            </Dropdown>
          </ReviewTitle>
          <List reviews={filteredReviews} currentCount={currentCount} />

          {reviews.length > currentCount ? <BigButton onClick={handleMoreReviews}>MORE REVIEWS</BigButton> : null}
          <BigButton data-testid="addReviewButton" onClick={() => setShowModal(true)}>ADD A REVIEW +</BigButton>
        </div>
      </ColumnContainer>
      {showModal
      ? <Modal closeModal={closeModal}>
        <ModalForm productID={productID} productName={productName} characteristicModel={currentMeta.characteristics} />
      </Modal>
      : null}
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