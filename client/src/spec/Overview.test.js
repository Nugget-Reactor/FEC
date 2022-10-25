import React from 'react';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import { sampleStyle } from './sampleData/Overview/sampleStyle.js';

import ImageGallery from '../Components/Overview/ImageGallery.jsx';



describe('renders Images from Overview Widget', () => {
  afterEach(cleanup);

  it('Image gallery widget should render', () => {
    const {container} = render(<ImageGallery currentStyle={sampleStyle} />);

    const thumbnails = container.getElementsByClassName('thumbnail');
    const image = container.getElementsByClassName('image');
    expect(image.length).toBe(1);
    expect(thumbnails.length).toBe(5);
  });
});