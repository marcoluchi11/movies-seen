import styled from "@emotion/styled";
import { Fragment, useContext, useEffect } from "react";
import BackButton from "./BackButton";
import { MoviesContext } from "../context/MoviesContext";
import { useAuth0 } from "@auth0/auth0-react";

import Axios from "axios";
import AddedButton from "./AddedButton";
import { nanoid } from "nanoid";
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
const AddButton = styled.button`
  margin: 1rem 0;
  width: 100%;
  border-radius: 15px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: limegreen;
  color: white;
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
const MovieMoreInfo = () => {
  const { setMore, more, setList, setError, setAdded, list, added } =
    useContext(MoviesContext);
  const { isAuthenticated, user } = useAuth0();
  const handleClick = () => {
    if (isAuthenticated) {
      const repeatMovie = list.findIndex(
        (elem) => elem.imdbID || elem.movieId === more.item.imdbID
      );
      if (repeatMovie === -1) {
        setError(false);
        more.item.id = nanoid();
        const itemDb = { ...more.item, mailName: user.email };
        Axios.post("https://movies-seen.herokuapp.com/insert", itemDb);
        setList([...list, more.item]);
        setAdded(true);
        setTimeout(() => {
          setAdded(false);
        }, 2500);
      } else {
        setError({ state: true, message: "You cannot add a movie twice" });
        return;
      }
    } else {
      setError({
        state: true,
        message: "You need to login first to add to your list",
      });
    }
    //SEPARATION
  };
  useEffect(() => {
    const fetchInfo = async () => {
      const url = `https://www.omdbapi.com/?i=${more.item.imdbID}&apikey=89a340b7`;
      const res = await fetch(url);
      const rta = await res.json();
      setMore({ state: true, item: rta });
    };
    fetchInfo();
    // eslint-disable-next-line
  }, [setMore]);

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
          <BackButton />
          <AddButton className="add" onClick={handleClick}>
            +Add to List
          </AddButton>
          {added && <AddedButton />}
        </div>
      </Container>
    </Fragment>
  );
};

export default MovieMoreInfo;
