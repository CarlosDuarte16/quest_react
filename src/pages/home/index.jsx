import './index.scss';
import Head from '../../components/head';
import Baseboard from '../../components/baseboard';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="page-home">
      <Head/>
        <Link to="/add-canal" className='button'>Adicionar Stream</Link>
      <div className="card-canais">
        
      </div>
      <Baseboard/>
    </div>
  );
}


