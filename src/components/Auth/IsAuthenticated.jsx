import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import Axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
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
  const { setList } = useContext(MoviesContext);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (user) {
      Axios.get("http://localhost:3001/read", {
        params: {
          user: user.email,
        },
      })
        .then((response) => setList(response.data))
        .catch((err) => console.log(err));
    }
  }, [user]);
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
