import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Routes,
} from  "react-router-dom";

import Home from "./pages/Home"
import MyPokemonsPage from './pages/MyPokemonsPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mypokemons" element={<MyPokemonsPage/>} />
          <Route path="/videopage" element={<VideoPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
