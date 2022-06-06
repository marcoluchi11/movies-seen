import styled from "@emotion/styled";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Error from "./Error";
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
  const { error } = useContext(MoviesContext);
  return (
    <Container>
      <Search />
      {error && (
        <Error message="You need to login to add movies to Your List" />
      )}
      <MoviesFetch />
    </Container>
  );
};

export default Main;
