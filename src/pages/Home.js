import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ListPokemonts from '../components/ListPokemonts';
import Footer from '../components/Footer';
import HeroVideo from '../components/HeroVideo';

function Home() {
  return (
  <div className='container mx-auto'>
    <Navbar />
    <Hero />
    <ListPokemonts />
    <HeroVideo />
    <Footer />
  </div>

  );
}

export default Home;
