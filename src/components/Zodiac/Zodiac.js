import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className='zodiac-card'>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/zodiac/${props.name}.png`} />
      <span>{props.name}</span>
      <span>{props.dates}</span>
      <span>{props.symbol}</span>
    </div>
  );
}
