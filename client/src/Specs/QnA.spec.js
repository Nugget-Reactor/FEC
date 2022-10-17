/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import QnA from '../Components/QnA/QnA.jsx';

describe('QnA Feature', () => {
  test('renders QnA feature component', () => {
    render(<QnA />);

    screen.debug();
  });
});

// describe('true is truthy', () => {
//   test('true is truthy', () => {
//     expect(true).toBe(true);
//   });
// });