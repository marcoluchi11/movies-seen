import styled from "@emotion/styled";
import { Fragment, useContext, useEffect } from "react";
import BackButton from "./BackButton";
import { MoviesContext } from "../context/MoviesContext";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import AddedButton from "./AddedButton";
import { nanoid } from "nanoid";
import Error from "./Error";
const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    .rating {
      background-color: gold;
      padding: 0 0.4rem;
      border-radius: 5px;
    }
    li {
      font-weight: 400;
      margin-right: 0.5rem;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 15px;
      margin: 1rem;
    }
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
  const { setMore, more, setList, setError, setAdded, list, added, error } =
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
          <ul>
            <li>{more.item.Year}</li>

            <li> {more.item.Genre}</li>
          </ul>
          <ul>
            <li>Seasons: {more.item.totalSeasons || "-"}</li>
            <li className="rating">IMDb Rating: {more.item.imdbRating}</li>
          </ul>
          <h3>Description: {more.item.Plot}</h3>
          <h5>Actors: {more.item.Actors}</h5>
          <hr />

          <BackButton />
          <AddButton className="add" onClick={handleClick}>
            +Add to Watchlist
          </AddButton>
          {added && <AddedButton />}
          {error && <Error message={error.message} />}
        </div>
      </Container>
    </Fragment>
  );
};

export default MovieMoreInfo;
