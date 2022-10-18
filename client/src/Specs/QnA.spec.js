jest.mock('@fortawesome/fontawesome-free/css/all.min.css', () => ({
  FontAwesomeIcon: ''
}))
import axios from 'axios';
jest.mock('axios');

import { render, screen } from '@testing-library/react';
import App from '../Components/App.jsx';

describe('QnA Feature', () => {
  test('renders App feature component', () => {
    render(<App />);
  });
});

// describe('true is truthy', () => {
//   test('true is truthy', () => {
//     expect(true).toBe(true);
//   });
// });