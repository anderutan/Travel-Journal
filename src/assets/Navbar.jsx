import Earth from './earth.svg';

export default function Navbar() {
  return (
    <nav>
      <img src={Earth} alt='earth icon' />
      <h1 className='title'>my travel journal.</h1>
    </nav>
  );
}
