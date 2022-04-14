import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from "../util/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function redirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user, "r-users");
      }
    }
    redirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(respponse);
    createUserDocumentFromAuth(user, "users");
  };
  
  return (
    <div>
      <h1>Sign In ✍ </h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
