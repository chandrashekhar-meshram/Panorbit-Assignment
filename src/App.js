import React, { createContext, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Data from './Data';
import AllUsers from './pages/AllUsers';

export const GlobalContext = createContext();

const App = () => {
  const [color, setColor] = useState('red');

  return (
    <GlobalContext.Provider value={{ appColor: color }}>
      <h1>App.js</h1>
      <Data />

      <Router>
        <Routes>
          <Route path="/" element={<AllUsers />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
