import styled from "@emotion/styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

const ContainerBoton = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    &&:hover {
      text-decoration: none;
    }
    svg {
      border-radius: 10px;
      padding: 0.5rem 0;
      background-color: #000;
      color: #fff;
    }
    button {
      border-radius: 15px;
      text-decoration: none;
      padding: 0.5rem 1rem;
      background-color: #000;
      color: white;
      border: none;
      outline: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

const BackButton = () => {
  const { setMore } = useContext(MoviesContext);
  return (
    <ContainerBoton onClick={() => setMore({ state: false })}>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-back"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
        </svg>
        <button>Back</button>
      </Link>
    </ContainerBoton>
  );
};

export default BackButton;
