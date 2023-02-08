import { createContext } from 'react';

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  return (
    <cartContext.Provider value={{ test: 'test' }}>
      {children}
    </cartContext.Provider>
  );
};
