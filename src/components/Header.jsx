import styled from "@emotion/styled";

const Encabezado = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e2e2e2;
`;
const Header = () => {
  return (
    <Encabezado>
      <h1>Armá tu lista de peliculas para ver</h1>
    </Encabezado>
  );
};

export default Header;
