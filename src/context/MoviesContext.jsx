import { createContext, useState } from "react";
export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=89a340b7`;
    const res = await fetch(url);
    const rta = await res.json();
    if (rta.Response === "True") {
      setError(false);
      setData(rta.Search);
    } else {
      setData(rta.Error);
      setError(true);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        data,
        error,
        setSearch,
        search,
        fetchData,
        setError,
        setList,
        list,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
