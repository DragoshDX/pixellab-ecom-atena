import { useEffect, useState } from 'react';

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`${baseUrl}/products/${productId}`)
        .then((response) => {
          // .json returns promise
          return response.json();
        })
        .then((product) => {
          setProduct(product);
        });
    }
  }, [setProduct, productId]);

  return { product };
};
