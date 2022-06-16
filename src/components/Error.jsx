import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  right: 1%;
  z-index: 90;
  top: 90%;
  background-color: #a42923;
  color: #fff;
  padding: 0.5rem;
  border-radius: 15px;
  h4 {
    margin: 0;
    padding: 0;
  }
`;

const Error = ({ message }) => {
  return (
    <Container>
      <h4>{message}</h4>
    </Container>
  );
};

export default Error;
