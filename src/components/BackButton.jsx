import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContainerBoton = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 1rem 0;
  svg {
    padding: 0.5rem 0;
    background-color: #000;
    color: #fff;
  }
`;
const Boton = styled.button`
  border-radius: 15px;

  padding: 0.5rem 1rem;
  background-color: #000;
  color: white;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;
const BackButton = () => {
  return (
    <Link to="/">
      <ContainerBoton>
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
        <Boton>Back</Boton>
      </ContainerBoton>{" "}
    </Link>
  );
};

export default BackButton;
