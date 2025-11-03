import React, { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

// Define item type
export interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Define the shape of our state
interface CartState {
  items: CartItem[];
  totalCount: number;
}

// Define possible actions
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number } // item id
  | { type: "CLEAR_CART" };

// Reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalCount: state.totalCount + 1,
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalCount: Math.max(0, state.totalCount - 1),
      };

    case "CLEAR_CART":
      return { items: [], totalCount: 0 };

    default:
      return state;
  }
}

// Define the context value type
interface CartContextType extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalCount: 0,
  });

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id: number) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for consuming context
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
