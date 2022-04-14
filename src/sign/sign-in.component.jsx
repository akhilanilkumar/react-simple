import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../util/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(respponse);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In ✍ </h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
    </div>
  );
};

export default SignIn;
