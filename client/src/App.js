
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Shirts from './pages/shirts';
import TShirts from './pages/tshirts';
import Knitwear from './pages/knitwear';
import Jackets from './pages/jackets';
import Trousers from './pages/trousers';
import Sweatpants from './pages/sweatpantsandjoggers';
import Shorts from './pages/shorts';
import Chinos from './pages/chinosandjeans';


function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/tshirts" element={<TShirts />} />
            <Route path="/knitwear" element={<Knitwear />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/trousers" element={<Trousers />} />
            <Route path="/sweatpantsandjoggers" element={<Sweatpants />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/chinosandjeans" element={<Chinos />} />
            {/* Add more routes here */}
          </Routes>
        </Router>
      );
    };

export default App;
