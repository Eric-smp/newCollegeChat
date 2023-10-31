import "./App.css";

import Home from "./pages/Home/home";
import Cadastrar from "./pages/Cadastro/cadastro";
import AppRoutes from "./Routes";




function App() {


 
  return (
    <div className="App">
      {/* <Cadastrar/> */}
      <AppRoutes/>
    </div>
  );
}

export default App;