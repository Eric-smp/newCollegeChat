import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Cadastrar from "./pages/Cadastro/cadastro";
import NomeGrupo from './pages/Grupo/index'

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