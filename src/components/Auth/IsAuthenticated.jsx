import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IsAuthenticated = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      {isAuthenticated ? (
        <Container>
          <Profile />
          <Link to="list">My list</Link>
          <Logout />
        </Container>
      ) : (
        <Login />
      )}
    </Container>
  );
};

export default IsAuthenticated;
