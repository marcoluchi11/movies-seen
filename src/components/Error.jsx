import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  padding: 0.2rem 2rem;
  margin: 1rem;
  color: #fff;
  border-radius: 5px;
  background-color: #a10221;
  p {
    text-align: center;
  }
`;

const Error = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Error;
