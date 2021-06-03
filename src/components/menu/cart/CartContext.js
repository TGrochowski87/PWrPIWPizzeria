import { createContext } from "react";

export const CartContents = createContext({
  content: [],
  setContent: () => {},
});
