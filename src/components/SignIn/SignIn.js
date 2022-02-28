import React , { useState} from "react";
import { connect } from "react-redux";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const SignIn =({emailSignInStart , googleSignInStart})=> {
  
  const [userCredentials,setUserCredentials]=useState({email:'',password:''})

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({...userCredentials ,[name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            handleChange={handleChange}
            value={password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapDistpatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDistpatchToProps)(SignIn);
