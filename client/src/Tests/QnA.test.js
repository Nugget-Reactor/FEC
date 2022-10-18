/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../Components/QnA/QnA.jsx';
// import renderer from 'react-test-renderer';
import axios from 'axios';
jest.mock('axios');

describe('renders QnA', () => {
  test('renders QnA feature component', () => {
    render(<QnA />);
  });
});

describe('true is truthy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
});