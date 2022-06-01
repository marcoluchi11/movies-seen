import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { Fragment, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import BackButton from "./BackButton";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 1rem;
    padding: 1rem;
  }
`;
const UserMoviesList = () => {
  const { list } = useContext(MoviesContext);
  if (list.length === 0)
    return (
      <div>
        <h1>Your list is empty</h1>
        <BackButton />
      </div>
    );
  return (
    <Fragment>
      <Container>
        {list.map((item) => (
          <div key={nanoid()}>
            <h1>{item.Title}</h1>
            <img src={item.Poster} alt="" />
          </div>
        ))}
      </Container>
      <BackButton />
    </Fragment>
  );
};

export default UserMoviesList;
