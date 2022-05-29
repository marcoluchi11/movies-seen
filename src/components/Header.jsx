import styled from "@emotion/styled";

const Encabezado = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e1e1e1;
`;
const Header = () => {
  return (
    <Encabezado>
      <h1>Create your own Movies list to see</h1>
    </Encabezado>
  );
};

export default Header;
