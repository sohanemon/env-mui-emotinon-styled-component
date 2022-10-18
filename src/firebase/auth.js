import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import app from "./init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const googlePopup = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
const githubPopup = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
const googleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};
const emailLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};
const emailSignUp = (email, password, setUser) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};

export {
  emailSignUp,
  githubPopup,
  emailLogin,
  auth,
  googlePopup,
  googleRedirect,
};
