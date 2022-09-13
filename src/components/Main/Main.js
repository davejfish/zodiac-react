import './Main.css';
import { signs } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';
import space from '../../space.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${space})` }}>
      <div className='zodiac-grid'>
        {signs.map((sign) => (
          <Zodiac key={sign.id} { ...sign } />
        ))}
      </div>
      
    </main>
  );
}