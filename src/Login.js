import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();
  const logintoApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      })
      .catch((error) => console.log(error));
  };
  const register = () => {
    if (!name) {
      return alert("fill the details");
    }
    alert("fill the details");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-2003.jpg"
        alt="LinkedinLogo"
      />
      <form>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          type="text"
          placeholder="Profile Pic Url (Optional)"
        />

        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          type="text"
        />

        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        <button type="submit" onClick={logintoApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
