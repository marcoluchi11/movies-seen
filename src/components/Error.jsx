import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  color: #fff;
  background-color: #a10221;
`;

const Error = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Error;
