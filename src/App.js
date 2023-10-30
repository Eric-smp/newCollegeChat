import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Cadastrar from "./components/Cadastrar";


const pages = [{id:1, name:'welcome'}, {id:2, name:'cadastrar'}, {id:3, name:'message'}]

function App() {
  const [user] = useAuthState(auth);

  const [cadastro, setCadastro] = useState(pages[0].name)
  const [home, setHome] = useState(pages[1].name)

  const routerPage = ()=>{
    setCadastro(pages[1].name)
  }
  const voltar = ()=>{
    setHome(pages[0].name)
  }
  return (
    <div className="App">
      <NavBar />
      {cadastro === 'welcome' && <Welcome routerPages={routerPage}/>}
      {cadastro === 'cadastrar' && <Cadastrar voltar={voltar}/>}
      
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;