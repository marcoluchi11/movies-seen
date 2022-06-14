import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
  }
  h3 {
    margin: 1rem;
  }
`;
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    isAuthenticated && (
      <Container>
        <img src={user.picture} alt="profile" />
        <h3>{user.name}</h3>
      </Container>
    )
  );
};
export default Profile;
