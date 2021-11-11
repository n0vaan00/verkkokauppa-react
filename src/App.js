import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Navbar';
import Header from './Header';
import Home from './Home';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';
import Pitkahihaiset from './Pitkahihaiset';
import Hihattomat from './Hihattomat';
import Tpaidat from './Tpaidat';

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
     <Routes>
    <Route path="/" component={Home} exact />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/" component={NotFound} />
     </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
