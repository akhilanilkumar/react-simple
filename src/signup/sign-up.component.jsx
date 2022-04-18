import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../util/firebase.utils";
import "./sign-up.component.css";

const SignUp = () => {
  // Initial value of form controls
  const formObj = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Create a state, initialize with above default value
  const [form, setForm] = useState(formObj);
  // Destruct the object values
  const { email, password, confirmPassword } = form;
  // Invoke on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(() => ({ ...form, [name]: value }));
  };

  // When user submit the form
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = form;
    try {
      // Create user using Email/Password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Set user details in context object after signup
      // setCurrentUser(user);

      // Save the user information in the Firebase table
      await createUserDocumentFromAuth(user, "users", {
        displayName: email.split("@")[0],
      });

      // Clear the form once the response has come
      setForm(formObj);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <hr />

          <FormInput
            label="Email"
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            autoComplete="off"
            value={confirmPassword}
            onChange={handleChange}
          />

          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
