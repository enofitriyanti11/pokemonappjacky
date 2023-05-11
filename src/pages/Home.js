import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HeroVideo from '../components/HeroVideo';

function Home() {
  return (
  <div className='container mx-auto'>
    <Navbar />
    <Hero />
    <HeroVideo />
    <Footer />
  </div>

  );
}

export default Home;
