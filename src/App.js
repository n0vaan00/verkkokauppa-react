import logo from './logo.svg'
import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
     <Routes>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/" component={NotFound} />
     </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
