import styled from "@emotion/styled";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Axios from "axios";
import { nanoid } from "nanoid";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  width: 25%;

  transition: 0.5s background-color ease;
  transition: 0.5s color ease;
  border-radius: 5px;

  &&:hover {
    color: #b2b2b2;
    img {
      opacity: 0.5;
    }
  }
  div {
    position: relative;
    img {
      width: 20rem;
      height: 20rem;
      border-radius: 1rem;
      width: 100%;
    }
    p.add {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.3rem 0.7rem;
      border-radius: 15px;
      background-color: limegreen;

      cursor: pointer;
    }
  }

  h1 {
    text-align: center;
  }
  p.year {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.75rem;
    padding: 0 0.7rem;
    border-radius: 1rem;
    background-color: #007aff;
    color: #fff;
  }

  p#moreinfo {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 0.75rem;
    padding: 0.3rem 0.7rem;
    border-radius: 1rem;
    background-color: #007aff;
    color: #fff;
  }
`;
const MoviesCard = ({ item }) => {
  const { setList, list, setError, setMore, setAdded, error } =
    useContext(MoviesContext);
  const { user, isAuthenticated } = useAuth0();
  const handleClick = (item) => {
    if (isAuthenticated) {
      const repeatMovie = list.findIndex((elem, index) => {
        return (elem.imdbID || elem.movieId) === item.imdbID;
      });
      console.log(repeatMovie);
      if (repeatMovie === -1) {
        setError({ ...error, state: false });
        item.id = nanoid();
        const itemDb = { ...item, mailName: user.email };
        Axios.post("https://movies-seen.herokuapp.com/insert", itemDb);
        setList([...list, item]);
        setAdded(true);
        setTimeout(() => {
          setAdded(false);
        }, 2500);
      } else {
        setError({ state: true, message: "You cannot add a movie twice" });
        setTimeout(() => {
          setError({ state: false, message: "" });
        }, 2500);
        return;
      }
    } else {
      setError({
        state: true,
        message: "You need to login first to add to your list",
      });
    }
  };
  const handleInfo = () => {
    setError({ ...error, state: false });
    setMore({ state: true, item });
  };
  return (
    <Container>
      <h1>{item.Title}</h1>
      <div>
        <img src={item.Poster} alt="poster" />
        <p className="add" onClick={() => handleClick(item)}>
          +Add to Watchlist
        </p>
        <p className="year">{item.Year}</p>
        <p onClick={() => handleInfo(item)} id="moreinfo">
          More info...
        </p>
      </div>
    </Container>
  );
};

export default MoviesCard;
