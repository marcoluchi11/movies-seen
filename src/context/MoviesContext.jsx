import { createContext, useState } from "react";
export const MoviesContext = createContext();
const MoviesProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState({ state: false, message: "" });
  const [list, setList] = useState([]);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState({ state: false });
  const fetchData = async () => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=89a340b7`;
    const res = await fetch(url);
    const rta = await res.json();
    if (rta.Response === "True") {
      setError({ ...error, state: false });
      setData(rta.Search);
    } else {
      setData(rta.Error);
      setError({ state: true, message: "Movie Not found, try again" });
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        data,
        added,
        setAdded,
        error,
        setSearch,
        loading,
        setLoading,
        search,
        fetchData,
        setError,
        setMore,
        more,
        setList,
        list,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
