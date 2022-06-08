import styled from "@emotion/styled";
import { Fragment, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Error from "./Error";

const Formulary = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  input[type="text"] {
    border-radius: 4px;
    border: 0.5px solid black;
    padding: 0.42rem 0.5rem;
    width: 30%;
  }
  button {
    cursor: pointer;
    color: rgb(104, 85, 224);
    font-weight: 700;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
    border: 0;
    margin: 0.2rem;
    padding: 0.42rem 0.5rem;
    outline: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
`;
const ContainerError = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
`;
const Search = () => {
  const { setSearch, search, fetchData, error, data } =
    useContext(MoviesContext);
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setSearch("");
  };
  return (
    <Fragment>
      <Formulary onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          placeholder="Search..."
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
        />

        <button type="submit">
          <img
            src={`https://icongr.am/material/magnify.svg?size=25&color=currentColor`}
            alt="search"
          />
          Buscar
        </button>
      </Formulary>
      <ContainerError>
        {error && (
          <Error message={typeof data === "string" ? "Movie not found" : ""} />
        )}
      </ContainerError>
    </Fragment>
  );
};

export default Search;
