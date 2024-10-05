import './index.scss';
import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <div className="comp-head">
      <div className="left-head">
        <img src="/assets/image/careca.png" alt="" />
        <h4>Streaming</h4>
      </div>
      <div className="right-head">
        <Link to="/" className='link'>Home</Link>
      </div>
    </div>

  );
}


