import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
const BotonLogin = styled.button`
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);
`;
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section>
      <BotonLogin className="login" onClick={() => loginWithRedirect()}>
        Login or Sign up
      </BotonLogin>
    </section>
  );
};

export default Login;
