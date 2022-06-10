import styled from "@emotion/styled";
import Axios from "axios";
import { nanoid } from "nanoid";
import { Fragment, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

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
const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;
const UserMoviesList = () => {
  const { list, setList, loading } = useContext(MoviesContext);
  const handleDelete = (elem, index) => {
    const listFiltered = list.filter((item, i) => i !== index);
    Axios.delete(`http://localhost:3001/delete/${elem.id}`);
    setList(listFiltered);
  };
  if (list.length === 0)
    return (
      <Fragment>
        <ContainerEmpty>
          {loading ? <Spinner /> : <h2>Your list is empty...</h2>}
        </ContainerEmpty>
        <BackButton />
      </Fragment>
    );
  return (
    <Fragment>
      <Container>
        {list.map((item, index) => (
          <div key={nanoid()}>
            <h1>{item.Title || item.movieName}</h1>
            <img
              className="listimage"
              src={item.Poster || item.movieImage}
              alt=""
            />
            <Imagen
              onClick={() => handleDelete(item, index)}
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
