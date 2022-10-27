import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleStyle, sampleProduct, sampleProductStyles } from './sampleData/Overview/sampleStyle.js';

import ImageGallery from '../Components/Overview/ImageGallery.jsx';
import DefaultImageView from '../Components/Overview/DefaultImgView.jsx';
import ExpandedView from '../Components/Overview/ExpandedView.jsx';
import AddCart from '../Components/Overview/AddCart.jsx';
import ProductDescription from '../Components/Overview/ProductDesc.jsx';
import ProductInfo from '../Components/Overview/ProductInfo.jsx';
import StyleSelector from '../Components/Overview/StyleSelector.jsx';
import ZoomView from '../Components/Overview/ZoomView.jsx';


describe('renders the image gallery component', () => {
  afterEach(cleanup);

  it('should render the image gallery component', () => {
    const {container} = render(<ImageGallery currentStyle={sampleStyle} />);

    const thumbnails = container.getElementsByClassName('thumbnail');
    const image = container.getElementsByClassName('image');
    expect(image.length).toBe(1);
    expect(thumbnails.length).toBe(5);
  });
});

describe('renders images from the default view', () => {
  afterEach(cleanup);

  it('should render the default image view', () => {
    const {container} = render(<DefaultImageView currentStyle={sampleStyle} slideNumber={0}/>);

    const thumbnails = container.getElementsByClassName('thumbnail');
    const image = container.getElementsByClassName('image');
    expect(image.length).toBe(1);
    expect(thumbnails.length).toBe(5);
  });
});

describe('renders images from the expanded view', () => {
  afterEach(cleanup);

  it('should render the expanded image view', () => {
    const {container} = render(<ExpandedView currentStyle={sampleStyle} slideNumber={0}/>);

    const thumbnails = container.getElementsByClassName('thumbnail');
    const image = container.getElementsByClassName('expanded-image');
    expect(image.length).toBe(1);
    expect(thumbnails.length).toBe(5);
  });
});


describe('renders add to cart component', () => {
  afterEach(cleanup);

  it('should render size and quantity selector, and the add button', () => {
    const {container} = render(<AddCart currentStyle={sampleStyle} />);

    const quantity = container.getElementsByClassName('quantity-selector');
    const size = container.getElementsByClassName('size-selector');
    const add = container.getElementsByClassName('add-cart-button');
    expect(quantity.length).toBe(1);
    expect(size.length).toBe(1);
    expect(add.length).toBe(1);
  });
});

describe('renders product description component', () => {
  afterEach(cleanup);

  it('should render the product slogan and description', () => {
    const {container} = render(<ProductDescription product={sampleProduct} />);
    const productdesc = container.getElementsByClassName('product-desc-container');
    expect(productdesc.length).toBe(1);
  });
});

describe('renders product info component', () => {
  afterEach(cleanup);

  it('should render the product category, and name', () => {
    const {container} = render(<ProductInfo product={sampleProduct} currentStyle={sampleStyle} />);
    const category = container.getElementsByClassName('product-category');
    const name = container.getElementsByClassName('product-name');
    expect(category.length).toBe(1);
    expect(name.length).toBe(1);
  });
});

describe('renders style selector component', () => {
  afterEach(cleanup);

  it('should render the style selector', () => {
    const {container} = render(<StyleSelector productStyles={sampleProductStyles.results} currentStyle={sampleStyle} />);
    const thumbnails = container.getElementsByClassName('style-thumbnail');
    expect(thumbnails.length).toBe(6);
  });
});

