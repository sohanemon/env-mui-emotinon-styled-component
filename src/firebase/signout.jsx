import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { auth } from "./auth";

const SignOut = () => {
  const { setUser } = useContext(UserContext);
  const nav = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        nav("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return <span onClick={handleSignOut}>Sign Out</span>;
};

export default SignOut;
