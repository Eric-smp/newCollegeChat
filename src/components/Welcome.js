import React, { useState } from "react";
import './Welcome.css'
import NavBar from "./NavBar";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Link } from "react-router-dom";


const Welcome = ({routerPages}) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


    const handleSubmit= (e)=>{
      e.preventDefault()
     console.log(email, password, 'enviando' )

     setEmail('')
     setPassword('')
    }

  return (
    <main className="welcome">
      <NavBar/>   
      <h2 className="tituloWelcome">Bem-vindo ao College Chat</h2>
      
      <div className="content-Form">
        <form onSubmit={handleSubmit}>
          <h3 className="titulo-Form">Entre</h3>
         
          <div className="information-Form">
            <label htmlFor="email">
              Email: 
              <br></br>
          <input type="email"  className="input-Email" onChange={(e)=> setEmail(e.target.value)} name={"email"} id="email"/>
            </label>

            <label htmlFor="senha">
              Senha:
              <br></br>
          <input type="password"   className="input-Password" name="senha" id="senha" onChange={(e)=> setPassword(e.target.value)}/>
            </label>
          </div>


          
          <div className="acessConta">
          <button type="submit" value="Enviar" className="entrar" onClick={handleSubmit} >Entrar</button>
            <Link to="/createLogin">
            <button className="cadastrar" onClick={routerPages}>Cadastrar-se</button>
            </Link>

          <button className="sign-in"  onClick={googleSignIn}>
            <img src="/googleIcon.png" alt="imagem" />
          </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Welcome;