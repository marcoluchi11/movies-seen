import styled from "@emotion/styled";
const Container = styled.div`
  position: fixed;
  right: 1%;
  top: 90%;
  background-color: limegreen;
  padding: 0.5rem;
  border-radius: 15px;
  h4 {
    margin: 0;
    padding: 0;
  }
`;
const AddedButton = () => {
  return (
    <Container>
      <h4>Element added succesfully</h4>
    </Container>
  );
};

export default AddedButton;
