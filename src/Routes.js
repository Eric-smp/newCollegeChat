import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastrar from "./pages/cadastro";
import NomeGrupo from './pages/grupo'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/createLogin" element={<Cadastrar/>}></Route>
                <Route path="/groupName" element={<NomeGrupo/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes;