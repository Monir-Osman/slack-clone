import { Button, ButtonBase } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase/firebase";
import { useStateValue } from "../context-api/StateProvider";
import { actionTypes } from "../context-api/reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo" />
        <h1>Sign in to Slack</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
