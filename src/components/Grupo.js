import NavBar from "./NavBar";
import './Grupo.css'
export function nomeGrupo(){
    return(
        <div>
            <NavBar/>
            <div className="nameIntegrantes">
                <div className="contentName">
                <h2>Eric de Sousa Sampaio</h2>
                <h2>Lucas Costa de Almeida</h2>
                <h2>Guilherme dos Santos Lima</h2>
                <h2>Gabriel Jorge Bezerra Ribeiro</h2>

                </div>
            </div>

           
        </div>
    )
}

export default nomeGrupo;