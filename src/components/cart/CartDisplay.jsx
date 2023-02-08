import { cartContext } from '@/contexts';
import { useContext } from 'react';

export const CartDisplay = () => {
  const { test: text } = useContext(cartContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Product {text}</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
};
