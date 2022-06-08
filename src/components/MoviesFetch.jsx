import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MoviesCard from "./MoviesCard";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const MoviesFetch = () => {
  const { data } = useContext(MoviesContext);
  if (data.length === 0 || typeof data === "string") return null;
  return (
    <Container>
      {data.map((item) => (
        <MoviesCard key={nanoid()} item={item} />
      ))}
    </Container>
  );
};

export default MoviesFetch;
