import styled from "@emotion/styled";
import { Fragment, useContext, useEffect } from "react";
import BackButton from "./BackButton";
import { MoviesContext } from "../context/MoviesContext";
const Container = styled.section`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info {
    text-align: center;
    h1 {
      font-size: 2rem;
      letter-spacing: 0.1rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
`;
const MovieMoreInfo = () => {
  const { setMore, more } = useContext(MoviesContext);
  useEffect(() => {
    const fetchInfo = async () => {
      const url = `https://www.omdbapi.com/?i=${more.item.imdbID}&apikey=89a340b7`;
      const res = await fetch(url);
      const rta = await res.json();
      setMore({ state: true, item: rta });
    };
    fetchInfo();
  }, []);

  return (
    <Fragment>
      <Container>
        <div className="image">
          <img src={more.item.Poster} alt="posterovich" />
        </div>
        <div className="info">
          <h1>{more.item.Title}</h1>
          <h4>Description: {more.item.Plot}</h4>
          <hr />
          <h4>Year: {more.item.Year}</h4>
          <h4>Actors: {more.item.Actors}</h4>
          <h4>Genre: {more.item.Genre}</h4>
          <h4>Seasons: {more.item.totalSeasons || "-"}</h4>
          <h4>IMDb Rating: {more.item.imdbRating}</h4>
        </div>
      </Container>

      <BackButton />
      <button>Add to List</button>
    </Fragment>
  );
};

export default MovieMoreInfo;
