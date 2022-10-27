/**
 * @jest-environment jsdom
*/
import React from 'react';
import { screen, render, cleanup, waitFor, fireEvent } from '@testing-library/react'
import axiosMock from "axios";
import Reviews from '../Components/R&R/Reviews.jsx';

import sampleReviews from './sampleData/Reviews/sampleReviews.js';
import sampleMetadata from './sampleData/Reviews/sampleMetadata.js';

describe('Reviews component testing', () => {
  /*  beforeAll(() => {
     render(<Reviews />)
   }); */
  /* beforeAll(() => {
    render(<Reviews />)
  }); */
  afterEach(cleanup);

  it('Reviews should render', async () => {
    const productID = 12345;

    axiosMock.get.mockImplementation((url) => {
      if (url === `/reviews?product_id=${productID}&sort=relevant&count=50`) {
        return Promise.resolve(sampleReviews);
      }
    })
    const { getByTestId, getByText } = render(<Reviews productID={productID} productName="Product1" currentMeta={sampleMetadata} />)

    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
    expect(getByTestId('addReviewButton')).toBeInTheDocument();

    const reviewTitle = await waitFor(() => getByTestId('reviewTitle'));

    expect(reviewTitle).toHaveTextContent('0 reviews');
  })
})