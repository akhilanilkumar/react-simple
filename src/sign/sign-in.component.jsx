import { useNavigate } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../util/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   async function redirect() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user, "r-users");
  //     }
  //   }
  //   redirect();
  // }, []);
  const navigate = useNavigate();


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user, "users");
    navigate("/");
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
