import './App.css';
import Navbar from './assets/Navbar';
import Card from './assets/Card';
import data from './data';

function App() {
  const cards = data.map((item) => <Card {...item} />);
  return (
    <>
      <Navbar />
      <div className='container'>{cards}</div>
    </>
  );
}

export default App;
