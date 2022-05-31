import { createContext, useState, useEffect } from "react";
export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=89a340b7`;
    console.log(url);
    const res = await fetch(url);
    const rta = await res.json();
    setData(rta.Search);
  };

  return (
    <MoviesContext.Provider value={{ data, setSearch, search, fetchData }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
