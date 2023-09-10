import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers

import ProductCard from '../../components/ProductCard'; 

test('renders the component', () => {
    let props={
        "title": "Local",
        "selling_price": 3490,
        "amount": 1,
        "cart_image": "https://cdn.lovefromyours.com/New%20SOS.jpg",
        "hover_image": "https://some-other-link/image13.png",
        "url": "https://www.some-other-link/produkt/sofa-og-lenestoler/2-seter-sofa/nyrenset-lys-gra-2-seter-sofa/"
    }
    
  render(<ProductCard product={props} />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});