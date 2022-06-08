import styled from "@emotion/styled";
import MoviesFetch from "./MoviesFetch";
import Search from "./Search";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    align-items: center;
  }
`;
const Main = () => {
  return (
    <Container>
      <Search />
      <MoviesFetch />
    </Container>
  );
};

export default Main;
