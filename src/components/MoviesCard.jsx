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
  position: relative;
  transition: 0.5s background-color ease;
  transition: 0.5s color ease;
  border-radius: 5px;

  &&:hover {
    background-color: #000;
    color: #fff;
  }
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    width: 100%;
  }
  h1 {
    text-align: center;
  }
  p {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.75rem;
    padding: 0 0.7rem;
    border-radius: 1rem;
    background-color: #007aff;
    color: #fff;
  }
  h2 {
    position: absolute;
    top: 5rem;
    right: 2rem;
    padding: 0.3rem 0.7rem;
    background-color: lime;
    border-radius: 25px;
    font-size: 1.9rem;
    cursor: pointer;
  }
`;
const MoviesCard = ({ item }) => {
  const { setList, list, setError, error } = useContext(MoviesContext);
  const { user, isAuthenticated } = useAuth0();
  const handleClick = (item) => {
    if (isAuthenticated) {
      setError(false);
      item.id = nanoid();
      const itemDb = { ...item, mailName: user.email };
      Axios.post("http://localhost:3001/insert", itemDb);
      setList([...list, item]);
    } else {
      setError({
        state: true,
        message: "You need to login first to add to your list",
      });
    }
  };
  return (
    <Container>
      <h1>{item.Title}</h1>
      <img src={item.Poster} alt="poster" />
      <h2 onClick={() => handleClick(item)}>+</h2>
      <p>{item.Year}</p>
    </Container>
  );
};

export default MoviesCard;
