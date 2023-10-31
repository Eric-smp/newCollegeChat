import React, { useState } from "react";
import './NavBar.css'
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const [user, setUser] = useState(false);
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
     const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
      <h1 className="tituloNav" >College Chat</h1>
      </Link>
      <div className="contatos-nav">
        <Link to="/">
          Inicio
        </Link>
        <Link to="/groupName">
          Grupo
        </Link>
      <a href="https://github.com/Eric-smp/college-chat" target="_blank" rel="noreferrer" >Projeto</a>

      </div>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sair
        </button>
      ) : null}
    </nav>
  );
};

export default NavBar;