import { async } from "@firebase/util";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import app from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const googlePopup = async () => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
};
const googleRedirect = () => {
  signInWithRedirect(auth, provider);
};
export { googlePopup, googleRedirect };
