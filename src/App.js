import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListPokemonts from './components/ListPokemonts';


function App() {
  return (
  <div className='container mx-auto'>
    <Navbar />
    <Hero />
    <ListPokemonts />
  </div>

  );
}

export default App;
