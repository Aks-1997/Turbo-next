import React from 'react';
import ProductDetail from './[productId]/page';

const product = {
  id: '1',
  name: 'Sample Product',
  description: 'This is a beautiful product with all the features you need!',
  price: 99.99,
  imageUrl: '/sample-product-image.jpg',
};

const Home= () => {
  return (
    <div>
      <ProductDetail params={{ productId: '1' }} />
    </div>
  );
};

export default Home;
