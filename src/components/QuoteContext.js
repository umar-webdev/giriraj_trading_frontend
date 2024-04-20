// QuoteContext.js

import { createContext, useContext, useReducer } from 'react';

const QuoteContext = createContext();

const initialState = {
  selectedProducts: [],
};

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_QUOTE':
      const existingProductIndex = state.selectedProducts.findIndex(
        (product) => product.name === action.product.name
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.selectedProducts];
        updatedProducts[existingProductIndex].quantity += 1;
        return {
          ...state,
          selectedProducts: updatedProducts,
        };
      } else {
        return {
          ...state,
          selectedProducts: [
            ...state.selectedProducts,
            { ...action.product, quantity: 1 },
          ],
        };
      }
    default:
      return state;
  }
};

const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  const addToQuote = (product) => {
    dispatch({ type: 'ADD_TO_QUOTE', product });
  };

  return (
    <QuoteContext.Provider value={{ state, addToQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export { QuoteProvider, useQuote };
