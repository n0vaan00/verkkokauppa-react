import logo from './logo.svg'
import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Navbar';
import Header from './Header';
import Home from './Home';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';
import Pitkahihaiset from './pitkahihaiset'
import Hihattomat from './hihattomat'

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
