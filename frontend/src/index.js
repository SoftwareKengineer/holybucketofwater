import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoolingTowerBrand from './CoolingTowerBrand';
import CoolingTower from './CoolingTower';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  {Bucketanimation}  from './components/Bucketanimation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/animation" element={<App />} />
        <Route path="/bucketanimation" element={<Bucketanimation />} />
        <Route path="/coolingtowerbrands" element={<CoolingTowerBrand />} />
        <Route path="/coolingtowers" element={<CoolingTower />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
