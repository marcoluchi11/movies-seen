import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
const BotonLogout = styled.button`
  color: white;
  background-color: rgba(104, 85, 224, 1);
`;
const Logout = () => {
  const { logout } = useAuth0();
  return (
    <BotonLogout
      className="logout"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </BotonLogout>
  );
};

export default Logout;
