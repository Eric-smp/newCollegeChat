import React, { useState } from 'react'
import NavBar from '../NavBar'
import './styles.css'
import { Link } from 'react-router-dom'
const Cadastrar = ({voltar}) => {

  const [createEmail, setCreateEmail] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [createTel, setCreaTel] = useState('')



  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(createEmail, createPassword, createTel)




  }
  return (
    <div className='cadastro'>
      <NavBar/>

      <h2 className='tituloCadastro'>Faça agora o seu cadastro</h2>

      <div className='cadastro-Form'>
        <form onSubmit={handleSubmit}>
            <h2 className='subtitulo-Form'>Cadastre-se:</h2>

            <div className='information-Form'>

            <label htmlFor="email">
              Email:
              <br></br>
            <input type="email" id='email' placeholder='Digite um e-mail:' onChange={(e)=> setCreateEmail(e.target.value)} />
            </label>

            <label htmlFor="senha">
              Senha:
              <br></br>
              <input type="password" name="" id="senha"  placeholder='Digite uma senha:' onChange={(e)=> setCreatePassword(e.target.value)}/>
            </label>

            <label htmlFor='telefone'>
              Celular:
              <br></br>
              <input type="tel" name="" id="telefone" placeholder='Digite o seu numero:' onChange={(e=> setCreaTel(e.target.value))} />
            </label>
            </div>


        </form>
              <button type="submit" className='criar-Conta' onClick={handleSubmit}>Cadastrar-se</button>
              <Link to="/">
              <button type="submit" className='criar-Conta' onClick={voltar}>Voltar</button>
              </Link>


      </div>
    </div>
  )
}

export default Cadastrar