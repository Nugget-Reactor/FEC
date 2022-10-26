/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent, act } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleProduct, sampleRelatedItems, noRelatedItems } from './sampleData/RelatedItems/sampleProduct.js';

import RelatedItems from '../Components/RelatedItems/RelatedItems.jsx';
import RelatedItemsCarousel from '../Components/RelatedItems/RelatedItemsCarousel.jsx';
import RelatedItem from '../Components/RelatedItems/RelatedItem.jsx';


describe('renders Related Items from Related Items Widget', () => {
  afterEach(cleanup);

  // it('Related Items Widget should render', async () => {
  //   act(() => {
  //   const { getByTestId, getByText } = render(<RelatedItems product={sampleProduct} />)
  //   });

  //   expect(screen.getByText('Related Items')).toBeInTheDocument();
  // })

  it('Related Items Carousel right button should render when there are more than 4 items in the relatedItems prop', async () => {
      const { getByTestId } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)

    expect(getByTestId('right-carousel-button')).toBeInTheDocument();
  })

  it('Related Items Product Name should render', async () => {
  act(() => {
    const { getByText } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)
  });
    expect(screen.getByText('Rita Hat')).toBeInTheDocument();
  })

  it('"No Related Products" message should render when there are no Related Products for the Current Product', async () => {
    act(() => {
      const { getByText } = render(<RelatedItems product={noRelatedItems} />)
    });
      expect(screen.getByText('There are no Related Products for this item')).toBeInTheDocument();
    })
});