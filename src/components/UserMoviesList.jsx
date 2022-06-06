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
    position: relative;
    margin: 1rem;
    padding: 1rem;
    .listimage {
      width: 15rem;
      height: 15rem;
    }
  }
`;
const Imagen = styled.img`
  position: absolute;
  top: 7rem;
  right: 1rem;
  background-color: #fff;
  border-radius: 50%;

  &&:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
const UserMoviesList = () => {
  const { list, setList } = useContext(MoviesContext);
  const handleDelete = (elem) => {
    setList(list.filter((item) => item.imdbID !== elem.imdbID));
  };
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
            <img className="listimage" src={item.Poster} alt="" />
            <Imagen
              onClick={() => handleDelete(item)}
              src="https://icongr.am/fontawesome/close.svg?size=32&color=000000
            "
              alt="close"
            />
          </div>
        ))}
      </Container>
      <BackButton />
    </Fragment>
  );
};

export default UserMoviesList;
