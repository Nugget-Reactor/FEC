/**
 * @jest-environment jsdom
*/
import React from 'react';
import { screen, render, cleanup, waitFor, fireEvent } from '@testing-library/react'
import axiosMock from "axios";
import Reviews from '../Components/R&R/Reviews.jsx';

describe('Reviews component testing', () => {
  /*  beforeAll(() => {
     render(<Reviews />)
   }); */
     beforeAll(() => {
     render(<Reviews />)
   });
  afterEach(cleanup);

  it('Reviews should render', async () => {
    const productID = 12345;

    axiosMock.get.mockImplementation((url) => {
      if (url === `/reviews?product_id=${productID}&sort=relevant&count=2`) {
        return Promise.resolve({
          data: {
            results: [{
              "review_id": 5,
              "rating": 3,
              "summary": "I'm enjoying wearing these shades",
              "recommend": false,
              "response": null,
              "body": "Comfortable and practical.",
              "date": "2019-04-14T00:00:00.000Z",
              "reviewer_name": "shortandsweeet",
              "helpfulness": 5,
              "photos": []
            }]
          }
        })
      }
      if (url === `/reviews/meta?product_id=${productID}`) {
        return Promise.resolve({
          data: {
            "product_id": "2",
            "ratings": {
              2: 1,
              3: 1,
              4: 2,
            },
            "recommended": {
              0: 5,
              1: 10
            },
            "characteristics": {
              "Size": {
                "id": 14,
                "value": "4.0000"
              },
              "Width": {
                "id": 15,
                "value": "3.5000"
              },
              "Comfort": {
                "id": 16,
                "value": "4.0000"
              }
            }
          }
        })
      }
    })
    const { getByTestId, getByText } = render(<Reviews productID={productID} productName="Product1" />)

    expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument();
    expect(getByTestId('addReviewButton')).toBeInTheDocument();

    const reviewTitle = await waitFor(() => getByTestId('reviewTitle'));

    expect(reviewTitle).toHaveTextContent('0 reviews');
  })
})