import { createContext, useState } from "react";
export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [data, setData] = useState(0);
  return (
    <MoviesContext.Provider value={{ data }}>{children}</MoviesContext.Provider>
  );
};

export default MoviesProvider;
