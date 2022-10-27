/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent, act } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleProduct, sampleRelatedItems, noRelatedItems, modalInfo, oneOutfit } from './sampleData/RelatedItems/sampleProduct.js';

import RelatedItems from '../Components/RelatedItems/RelatedItems.jsx';
import RelatedItemsCarousel from '../Components/RelatedItems/RelatedItemsCarousel.jsx';
import RelatedItem from '../Components/RelatedItems/RelatedItem.jsx';
import OutfitCollection from '../Components/RelatedItems/OutfitCollection.jsx';
import OutfitsCarousel from '../Components/RelatedItems/OutfitsCarousel.jsx';
import SingleOutfit from '../Components/RelatedItems/SingleOutfit.jsx';
import OutfitButtonCard from '../Components/RelatedItems/OutfitButtonCard.jsx';
import CompareModal from '../Components/RelatedItems/CompareModal.jsx';
import CompareModalTable from '../Components/RelatedItems/CompareModalTable.jsx';



describe('renders Related Items from Related Items Widget', () => {
  afterEach(cleanup);

  it('Related Products Widget should render', async () => {
    act(() => {
    const { getByTestId } = render(<RelatedItems product={sampleProduct} />)
    });

    expect(screen.getByTestId('related-products-header')).toBeInTheDocument();
  })

  it('Related Products Carousel should render', async () => {
    const { getByTestId } = render(<RelatedItems product={sampleProduct} />)

    expect(getByTestId('related-items-carousel')).toBeInTheDocument();
  })

  it('Related Products Carousel Container should render', async () => {
    const { getByTestId } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)

    expect(getByTestId('related-items-container')).toBeInTheDocument();
  })

  it('Related Products Carousel right button should render when there are more than 4 items in the relatedItems prop', async () => {
      const { getByTestId } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)

    expect(getByTestId('right-carousel-button')).toBeInTheDocument();
  })

  it('Related Products Product Name should render', async () => {
  act(() => {
    const { getByText } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)
  });
    expect(screen.getByText('Rita Hat')).toBeInTheDocument();
  })

  it('Related Items Carousel right button should render when there are more than 4 items in the relatedItems prop', async () => {
    const { getByTestId } = render(<RelatedItemsCarousel relatedItems={sampleRelatedItems} />)

  expect(getByTestId('right-carousel-button')).toBeInTheDocument();
})

});


describe('Renders OutFit module', () => {
  afterEach(cleanup);

  it('should render the Outfit Collection', async () => {
    act(() => {
      const { getByText } = render(<OutfitCollection />)
    });
    expect(screen.getByText('Your Outfit')).toBeInTheDocument();
  })

  it('should render "Your Outfit" Carousel', async () => {
    const { getByTestId } = render(<OutfitsCarousel relatedItems={sampleRelatedItems} />)

    expect(getByTestId('outfit-carousel')).toBeInTheDocument();
  })

  it('should render the OutfitButton Card', async () => {
    act(() => {
      const { getByText } = render(<OutfitButtonCard />)
    });
      expect(screen.getByText('Add Current Product to your Outfit')).toBeInTheDocument();
  })

  it('should render an Outfit Card', async () => {
    act(() => {
      const { getByText } = render(<SingleOutfit outfit={oneOutfit}/>)
    });
      expect(screen.getByText('Blues Suede Shoes')).toBeInTheDocument();
  })
});

describe('Renders Comparing Modal', () => {
  afterEach(cleanup);

  it('should render the Comparing Modal', async () => {
    act(() => {
      var { productName, relatedCharacteristics, currentCharacteristics, relatedName } = modalInfo;
      const { getByText } = render(<CompareModal  productName={productName} relatedCharacteristics={relatedCharacteristics} currentCharacteristics={currentCharacteristics} relatedName={relatedName} />)
    });
      expect(screen.getByText('Libbie Backpack')).toBeInTheDocument();
  })

  it('should render the Comparing Modal Table', async () => {
    act(() => {
      var { productName, relatedCharacteristics, currentCharacteristics, relatedName } = modalInfo;
      const { getByText } = render(<CompareModalTable  productName={productName} relatedCharacteristics={relatedCharacteristics} currentCharacteristics={currentCharacteristics} relatedName={relatedName} />)
    });
      expect(screen.getByText('COMPARING')).toBeInTheDocument();
  })
});

