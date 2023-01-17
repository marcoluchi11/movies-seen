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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: 400;
    padding: 0;
    margin: 1rem;
    font-size: 1rem;
  }
  .userlist {
    text-align: center;
    margin: 1rem;
    padding: 1rem;

    div {
      position: relative;
      .listimage {
        border-radius: 10px;
        width: 15rem;
        height: 15rem;
      }
    }
  }
`;
const Imagen = styled.img`
  position: absolute;
  top: 1rem;
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
    window.confirm(`Are you sure you want to delete ${elem.Title}`);
    const listFiltered = list.filter((item, i) => i !== index);
    Axios.delete(`https://movies-seen.fly.dev/delete/${elem.id}`);
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
          <div className="userlist" key={nanoid()}>
            <h1>{item.Title || item.movieName}</h1>
            <div>
              <img
                className="listimage"
                src={item.Poster || item.movieImage}
                alt="img"
              />
              <Imagen
                onClick={() => handleDelete(item, index)}
                src="https://icongr.am/fontawesome/close.svg?size=32&color=000000
            "
                alt="close"
              />
            </div>
          </div>
        ))}
      </Container>
      <BackButton />
    </Fragment>
  );
};

export default UserMoviesList;
