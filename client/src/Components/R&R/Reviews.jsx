import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';
import ModalForm from './ModalForm.jsx';
import Modal from './Modal.jsx';
import Breakdown from './Breakdown.jsx';

const Ratings = ({ productID, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [sort, setSort] = useState('relevant');
  const [currentCount, setCurrentCount] = useState(2);
  const [totalCount, setTotalCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(productID !== undefined) {
      axios.get(`/reviews?product_id=${productID}&sort=${sort}&count=${currentCount}`)
      .then(res => {
        setReviews(res.data.results)
      })
      .catch(err => console.error(err));
    }
  }, [productID, sort, currentCount]);

  useEffect(() => {
    if(productID !== undefined) {
      axios.get(`/reviews/meta?product_id=${productID}`)
      .then(res => {
        setMetadata(res.data);
      })
      .catch(err => console.error(err));
    }
  }, [productID]);

  useEffect(() => {
    setTotalCount(getReviewCount());
  }, [metadata])

  const getReviewCount = () => {
    let total = 0;

    for(let count in metadata.ratings) {
      total += Number(metadata.ratings[count]);
    }
    return total;
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
          <Breakdown metadata={metadata} />
        </div>
        <div>
          <ReviewTitle>{totalCount} reviews, sorted by
            <Dropdown value={sort} onChange={handleSort}>
              <option value='relevant'>relevance</option>
              <option value='helpful'>most helpful</option>
              <option value='newest'>newest</option>
            </Dropdown>
          </ReviewTitle>
          <List reviews={reviews} />

          {totalCount >= currentCount ? <BigButton onClick={handleMoreReviews}>MORE REVIEWS</BigButton> : null}
          <BigButton onClick={() => setShowModal(true)}>ADD A REVIEW +</BigButton>
        </div>
      </ColumnContainer>
      {showModal ? <Modal setShowModal={setShowModal}><ModalForm productName={productName} /></Modal> : null}
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
  cursor: pointer;
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
  margin: 0 10px;
  font-size: inherit;
  cursor: pointer;
`
export default Ratings;