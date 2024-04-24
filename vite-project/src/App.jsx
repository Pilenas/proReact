import Header from './components/header';
import Nav from './components/nav';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Watchlist from './pages/watchlist'
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <div className="app">

                  <Header />
                  <Nav />
                    <Routes>
                      <Route path="/" element={ <Home/> } />
                      <Route path="/favorites" element={ <Favorites/> } />
                      <Route path="/watchlist" element={ <Watchlist/> } />
                    </Routes>
                  <Footer />

    </div>
  )
  
}

export default App
