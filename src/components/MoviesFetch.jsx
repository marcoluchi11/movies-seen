import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import AddedButton from "./AddedButton";
import MovieMoreInfo from "./MovieMoreInfo";
import MoviesCard from "./MoviesCard";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const MoviesFetch = () => {
  const { data, more, added } = useContext(MoviesContext);
  if (data.length === 0 || typeof data === "string") return null;
  return (
    <Container>
      {more.state ? (
        <MovieMoreInfo />
      ) : (
        <Container>
          {data.map((item) => (
            <MoviesCard key={nanoid()} item={item} />
          ))}
          {added && <AddedButton />}
        </Container>
      )}
    </Container>
  );
};

export default MoviesFetch;
