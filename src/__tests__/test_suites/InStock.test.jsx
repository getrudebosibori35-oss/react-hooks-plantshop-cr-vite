
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('3rd Deliverable', () => {
  test('changes a plant from In Stock to Out of Stock when clicked', async () => {
    global.setFetchResponse(global.basePlants);

    const { findAllByText } = render(<App />);

    const inStockButtons = await findAllByText('In Stock');

    fireEvent.click(inStockButtons[0]);

    expect(inStockButtons[0]).toHaveTextContent('Out of Stock');
  });
});
