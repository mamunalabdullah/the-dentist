import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Banner from './Pages/Banner/Banner';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
