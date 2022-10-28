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

jest.mock('../Tools/cloudWidget.js', ()=>({
  createCloudinaryWidget:()=> {
    return {
      open: ()=>{},
      close: ()=>{}
    }
  }
}));

describe('Reviews components testing', () => {

  afterEach(cleanup);

  const productID = 12345;
  const productName = 'Libbie Backpack';
  const totalCount = 11;

  it('Reviews should render', async () => {

    axiosMock.get.mockImplementation((url) => {
      if (url === `/reviews?product_id=${productID}&sort=relevant&count=50`) {
        return Promise.resolve(sampleReviews);
      }
    });
    const { getByTestId, getByText } = render(<Reviews productID={productID} productName="Product1" currentMeta={sampleMetadata} />);

    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
    expect(getByTestId('addReviewButton')).toBeInTheDocument();

    const reviewTitle = await waitFor(() => getByTestId('reviewTitle'));

    expect(reviewTitle).toHaveTextContent('12 reviews');
  });

  it('Breakdown should render', async () => {
    const { getByTestId } = render(<Breakdown currentMeta={sampleMetadata} totalCount={totalCount} filters={[1]} />);

    const avgRating = await waitFor(() => getByTestId('avgRating'));

    expect(avgRating).toHaveTextContent('2.8');
    expect(getByTestId('currentFilters')).toHaveTextContent('Filtered by star rating(s): 1');
  });

  it('Characteristic Input should render', async () => {
    const { getByTestId } = render(<CharacteristicInput name="Size" charID={1} />);

    expect(getByTestId('leftDescription')).toHaveTextContent('A size too small');
    expect(getByTestId('rightDescription')).toHaveTextContent('A size too wide');
  });

  it('Character Tiles should render', async () => {
    const { getByTestId, getByText } = render(<CharacterTile charName="Fit" value={2.5} />);

    expect(getByText('Fit')).toBeInTheDocument();
    expect(getByText('Tight')).toBeInTheDocument();
    expect(getByText('Perfect')).toBeInTheDocument();
    expect(getByText('Loose')).toBeInTheDocument();
  });

  it('Tile should render', async () => {
    const { getByTestId, getByText } = render(<Tile review={sampleReviews.data.results[0]} />);

    expect(getByText('shortandsweeet, April 13, 2019')).toBeInTheDocument();
    expect(getByText('I\'m enjoying wearing these shades')).toBeInTheDocument();
    expect(getByText('Comfortable and practical.')).toBeInTheDocument();
    expect(screen.queryByText('I recommend this product!')).not.toBeInTheDocument();
  });

  it('Input form should render', async () => {
    const { getByTestId, getByText } = render(<ModalForm productID={productID} productName={productName} characteristicModel={sampleMetadata.characteristics} />);

    expect(getByText('Write your review')).toBeInTheDocument();
    expect(getByText('About the Libbie Backpack')).toBeInTheDocument();
    expect(getByText('Size')).toBeInTheDocument();
    expect(getByText('Width')).toBeInTheDocument();
    expect(getByText('Comfort')).toBeInTheDocument();
  });
});