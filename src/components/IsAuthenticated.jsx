import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";

const IsAuthenticated = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Profile />
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default IsAuthenticated;
