import './index.scss';
import Head from '../../components/head';
import Baseboard from '../../components/baseboard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [consulCanal, setConsulCanal] = useState([]);
  const [consulPrograma, setConsulPrograma] = useState([]);
  const [consulUsuario, setConsulUsuario] = useState([]);

  async function buscarCanal() {
    const url = 'http://localhost:5010/consultarCanal';
    let resp = await axios.get(url);
    setConsulCanal(resp.data);
  }

  useEffect(() => {
    buscarCanal();
  }, []);

  async function buscarPrograma() {
    const url = 'http://localhost:5010/consultarPrograma';
    let resp = await axios.get(url);
    setConsulPrograma(resp.data);
  }

  useEffect(() => {
    buscarPrograma();
  }, []);

  async function buscarUsuario() {
    const url = 'http://localhost:5010/consultarUsuario';
    let resp = await axios.get(url);
    setConsulUsuario(resp.data);
  }

  useEffect(() => {
    buscarUsuario();
  }, []);

  async function deletarCanal(id) {
    const url = `http://localhost:5010/deletarCanal/${id}`;
    await axios.delete(url);
    buscarCanal();
  }

  return (
    <div className="page-home">
      <Head />
      <Link to="/add-canal" className='button'>Adicionar Stream</Link>
      
      <div className="card-stream">
        <table>
          <thead>
            <tr>
              <th>Canal</th>
              <th>Número</th>
              <th>Público</th>
              <th>Programas</th>
              <th>Usuários</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {consulCanal.map(canal => (
              <tr key={canal.id}>
                <td>{canal.nome}</td>
                <td>{canal.canal}</td>
                <td>{canal.publico ? 'Sim' : 'Não'}</td>
                <td>
                  <ul>
                    {consulPrograma
                      .filter(programa => programa.id_canal === canal.id_canal)
                      .map(programa => (
                        <li key={programa.id}>
                          {programa.nome} ({programa.genero}, {programa.horario})
                        </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {consulUsuario.map(usuario => (
                      <li key={usuario.id}>
                        {usuario.nome}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button onClick={() => deletarCanal(canal.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Baseboard />
    </div>
  );
}
