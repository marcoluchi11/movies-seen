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
  a {
    text-decoration: none;
    background-color: #000;
    color: #fff;
    margin: 1rem;
    border: 1px solid #fff;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid black;
    }
  }
`;
const IsAuthenticated = () => {
  const { setList, setLoading } = useContext(MoviesContext);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    setLoading(true);
    if (user) {
      Axios.get("https://movies-seen.herokuapp.com/read", {
        params: {
          user: user.email,
        },
      })
        .then((response) => {
          setList(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, setList, setLoading]);
  return (
    <Container>
      {isAuthenticated ? (
        <Container>
          <Profile />
          <div>
            <Link to="list">My list</Link>
            <Logout />
          </div>
        </Container>
      ) : (
        <Login />
      )}
    </Container>
  );
};

export default IsAuthenticated;
