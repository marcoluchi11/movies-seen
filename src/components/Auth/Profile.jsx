import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  img {
    width: 14rem;
    height: 14rem;
    border-radius: 15px;
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
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email : {user.email}</p>
      </Container>
    )
  );
};
export default Profile;
