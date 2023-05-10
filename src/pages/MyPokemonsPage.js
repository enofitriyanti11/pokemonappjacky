import Footer from '../components/Footer';
import MyPokemons from '../components/MyPokemons';
import Navbar from '../components/Navbar';


function MyPokemonsPage() {
  return (
  <div className='container mx-auto'>
    <Navbar />
    <MyPokemons />
    <Footer />
  </div>

  );
}

export default MyPokemonsPage;
