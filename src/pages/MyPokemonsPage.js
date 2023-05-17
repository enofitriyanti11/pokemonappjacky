import Footer from '../components/Footer';
import MyPokemons from '../components/MyPokemons';
import Navbar from '../components/Navbar';


function MyPokemonsPage() {
  return (
  <div className='bg-secondaryColor'>
    <Navbar />
    <MyPokemons />
    <Footer />
  </div>

  );
}

export default MyPokemonsPage;
