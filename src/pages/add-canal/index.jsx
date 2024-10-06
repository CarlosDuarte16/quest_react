import './index.scss';
import Head from '../../components/head';
import Baseboard from '../../components/baseboard';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Add_Canal() {
  const[nomeCanal, setNomeCanal] = useState('');
  const[numeroCanal, setNumeroCanal] = useState('');
  const[publico, setPublico] = useState(false);

  async function SalvarCanalBD(){
    const carregar = {
      "nome": nomeCanal,
      "canal": numeroCanal,
      "publico":publico
    }
    const url = 'http://localhost:5010/inserirCanal'
    let resp = await axios.post(url, carregar);
    alert(`Canal adicionado no BD. ID: ${resp.data.id}`)
  } 


  const[usuario, setUsuario] = useState('');

  async function SalvarUsuarioBD(){
    const carregar = {
      "nome": usuario
    }
    const url = 'http://localhost:5010/inserirUsuario'
    let resp = await axios.post(url, carregar);
    alert(`Usuario adicionado no BD. ID: ${resp.data.id}`)
  }

  const[id_canal, setId_canal] = useState('');
  const[programa, setPrograma] = useState('');
  const[genero, setGenero] = useState('');
  const[tempo, setTempo] = useState('');

  async function SalvarProgramaBD(){
    const carregar = {
      "id_canal": id_canal,
      "nome": programa,
      "genero": genero,
      "horario": tempo
    }
    const url = 'http://localhost:5010/inserirPrograma'
    let resp = await axios.post(url, carregar);
    alert(`Programa adicionado no BD. ID: ${resp.data.Id}`)
  }

  const[id_canal_programa, setId_canal_programa] = useState('');
  const[id_usuario, setId_usuario] = useState('');

  async function SalvarProgramaFavoritoBD(){
    const carregar = {
      "usuario": id_usuario,
      "programa": id_canal_programa
    }
    const url = 'http://localhost:5010/inserirProgramaFavorito'
    let resp = await axios.post(url, carregar);
    alert(`Programa Favorito adicionado no BD. ID: ${resp.data.Id}`)
  }

  return (
    <div className="page-add_stream">
      <Head />
      <div className="sessions-inputs">
        <div className="session-canal">
          <div className="input">
            <h5>Nome do canal</h5>
            <input type="text" value={nomeCanal} onChange={e => setNomeCanal(e.target.value)} />
          </div>
          <div className="input">
            <h5>Numero do Canal</h5>
            <input type="text" value={numeroCanal} onChange={e => setNumeroCanal(e.target.value)}/>
          </div>
          <div className="input-check">
            <h5>Publico</h5>
            <input type="checkbox" checked={publico} onChange={e => setPublico(e.target.checked)}/>
          </div>
          <button onClick={SalvarCanalBD}>Salvar</button>
        </div>

        <div className="session-programa">
          <div className="input">
            <h5>Id Canal</h5>
            <input type="text" value={id_canal} onChange={e => setId_canal(e.target.value)} />
          </div>
          <div className="input">
            <h5>Nome do Programa</h5>
            <input type="text" value={programa} onChange={e => setPrograma(e.target.value)} />
          </div>
          <div className="input">
            <h5>Genero</h5>
            <input type="text" value={genero} onChange={e => setGenero(e.target.value)} />
          </div>
          <div className="input">
            <h5>Duração</h5>
            <input type="text" value={tempo} onChange={e => setTempo(e.target.value)}/>
          </div>
          <button onClick={SalvarProgramaBD}>Salvar</button>
        </div>

        <div className="session-perfil">
          <div className="input">
            <h5>Nome do Usuario</h5>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
          </div>
          <button onClick={SalvarUsuarioBD}>Salvar</button>
        </div>

        <div className="session-programafavorito">
          <div className="input">
            <h5>Id do Usuario</h5>
            <input type="text" value={id_usuario} onChange={e => setId_usuario(e.target.value)} />
          </div>
          <div className="input">
            <h5>Id do Canal</h5>
            <input type="text" value={id_canal_programa} onChange={e => setId_canal_programa(e.target.value)} />
          </div>
          <button onClick={SalvarProgramaFavoritoBD} >Salvar</button>
        </div>

      </div>
      <Baseboard />
    </div>
  );
}


