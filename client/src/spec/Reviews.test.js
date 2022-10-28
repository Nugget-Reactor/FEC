/**
 * @jest-environment jsdom
*/
import React from 'react';
import { screen, render, cleanup, waitFor, fireEvent } from '@testing-library/react'
import axiosMock from "axios";

import Reviews from '../Components/R&R/Reviews.jsx';
import Breakdown from '../Components/R&R/Breakdown.jsx'
import CharacteristicInput from '../Components/R&R/CharacteristicInput.jsx'
import CharacterTile from '../Components/R&R/CharacterTile.jsx'
import List from '../Components/R&R/List.jsx'
import ModalForm from '../Components/R&R/ModalForm.jsx'
import RatingFilter from '../Components/R&R/RatingFilter.jsx'
import Tile from '../Components/R&R/Tile.jsx'

import sampleReviews from './sampleData/Reviews/sampleReviews.js';
import sampleMetadata from './sampleData/Reviews/sampleMetadata.js';

describe('Reviews components testing', () => {

  afterEach(cleanup);

  const productID = 12345;

  it('Reviews should render', async () => {

    axiosMock.get.mockImplementation((url) => {
      if (url === `/reviews?product_id=${productID}&sort=relevant&count=50`) {
        return Promise.resolve(sampleReviews);
      }
    });
    const { getByTestId, getByText } = render(<Reviews productID={productID} productName="Product1" currentMeta={sampleMetadata} />)

    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
    expect(getByTestId('addReviewButton')).toBeInTheDocument();

    const reviewTitle = await waitFor(() => getByTestId('reviewTitle'));

    expect(reviewTitle).toHaveTextContent('0 reviews');
  });

  it('Breakdown should render', async () => {

  })
})