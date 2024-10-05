import './index.scss';
import Head from '../../components/head';
import Baseboard from '../../components/baseboard';

export default function Add_Canal() {
  return (
    <div className="page-add_stream">

      <Head />

      <div className="sessions-inputs">

        <div className="session-canal">
          <div className="input">
            <h5>Nome do canal</h5>
            <input type="text" />
          </div>
          <div className="input">
            <h5>Numero do Canal</h5>
            <input type="text" />
          </div>
          <div className="input-check">
            <h5>Publico</h5>
            <input type="checkbox" />
          </div>
        </div>

        <div className="session-programa">
          <div className="input">
            <h5>Id Canal</h5>
            <input type="text" />
          </div>
          <div className="input">
            <h5>Nome do Programa</h5>
            <input type="text" />
          </div>
          <div className="input">
            <h5>Genero</h5>
            <input type="text" />
          </div>
          <div className="input">
            <h5>Duração</h5>
            <input type="text" />
          </div>
        </div>

        <div className="session-perfil">
          <div className="input">
            <h5>Nome do Usuario</h5>
            <input type="text" />
          </div>
        </div>

        <div className="session-programafavorito">
          <div className="input">
            <h5>Id do Usuario</h5>
            <input type="text" />
          </div>
          <div className="input">
            <h5>Id do Canal</h5>
            <input type="text" />
          </div>
        </div>

      </div>
      <Baseboard />
    </div>
  );
}


