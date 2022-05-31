import styled from "@emotion/styled";

const Head = styled.header`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  background-color: #e1e1e1;
`;
const Header = () => {
  return (
    <Head>
      <h1>Create your own Movies list to see</h1>
    </Head>
  );
};

export default Header;
