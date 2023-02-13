import { useCart } from '@/hooks';
import { createContext } from 'react';

export const cartContext = createContext();

const x = cartContext;

export const CartContext = ({ children }) => {
  const { cartProducts, loading, cartId } = useCart(2);

  return (
    <x.Provider value={{ cartProducts, loading, cartId }}>
      {children}
    </x.Provider>
  );
};
