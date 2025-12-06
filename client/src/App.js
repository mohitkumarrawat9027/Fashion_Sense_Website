
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
import Searchresults from './pages/searchresults';
import Register from './pages/register';
import Login from './pages/login';
import ProtectedRoute from './ProtectedRoute'


function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/shirts" element={<ProtectedRoute><Shirts /></ProtectedRoute>} />
            <Route path="/tshirts" element={<ProtectedRoute><TShirts /></ProtectedRoute>} />
            <Route path="/knitwear" element={<ProtectedRoute><Knitwear /></ProtectedRoute>} />
            <Route path="/jackets" element={<ProtectedRoute><Jackets /></ProtectedRoute>} />
            <Route path="/trousers" element={<ProtectedRoute><Trousers /></ProtectedRoute>} />
            <Route path="/sweatpantsandjoggers" element={<ProtectedRoute><Sweatpants /></ProtectedRoute>} />
            <Route path="/shorts" element={<ProtectedRoute><Shorts /></ProtectedRoute>} />
            <Route path="/chinosandjeans" element={<ProtectedRoute><Chinos /></ProtectedRoute>} />
            <Route path="/searchresults" element={<ProtectedRoute><Searchresults /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            {/* Add more routes here */}
          </Routes>
        </Router>
      );
    };

export default App;
