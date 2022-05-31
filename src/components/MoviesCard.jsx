import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  width: 25%;
  position: relative;
  transition: 0.5s background-color ease;
  transition: 0.5s color ease;
  border-radius: 5px;
  &&:hover {
    background-color: #000;
    color: #fff;
  }
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    width: 100%;
  }
  h1 {
    text-align: center;
  }
  p {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.75rem;
    padding: 0 0.7rem;
    border-radius: 1rem;
    background-color: #007aff;
    color: #fff;
  }
`;
const MoviesCard = ({ item }) => {
  return (
    <Container>
      <h1>{item.Title}</h1>
      <img src={item.Poster} alt="poster" />
      <p>{item.Year}</p>
    </Container>
  );
};

export default MoviesCard;
