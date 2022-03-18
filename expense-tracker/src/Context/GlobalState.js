import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, info: "Flower", amount: -20 },
    { id: 2, info: "Book", amount: -120 },
    { id: 3, info: "Salary", amount: 500 },
    { id: 4, info: "SmartPhone", amount: -2000 },
  ],
};

// Create Context
const GlobalContext = createContext(initialState);
export default GlobalContext;

// Context Provider Component
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>;
};
