import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Global.scss';

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;