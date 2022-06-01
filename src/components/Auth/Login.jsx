import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  margin-bottom: 3rem;
`;
const BotonLogin = styled.button`
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);
  padding: 0.5rem 2rem;
`;
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container>
      <BotonLogin className="login" onClick={() => loginWithRedirect()}>
        Login or Sign up
      </BotonLogin>
    </Container>
  );
};

export default Login;
