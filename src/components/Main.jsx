import styled from "@emotion/styled";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MoviesFetch from "./MoviesFetch";
import Search from "./Search";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    align-items: center;
  }
`;
const Main = () => {
  const { more } = useContext(MoviesContext);
  return (
    <Container>
      {more.state === false ? <Search /> : null}

      <MoviesFetch />
    </Container>
  );
};

export default Main;
