import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListPokemonts from './components/ListPokemonts';
import Footer from './components/Footer';


function App() {
  return (
  <div className='container mx-auto'>
    <Navbar />
    <Hero />
    <ListPokemonts />
    <Footer />
  </div>

  );
}

export default App;
