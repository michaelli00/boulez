import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Header from './components/Header/Header';
import PitchMultiplication from './components/PitchMultiplication/PitchMultiplication';
import TotalSerialism from './components/TotalSerialism/TotalSerialism';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Header/>
    <Routes>
      <Route
        path="/"
        element={<App/>}
      />
      <Route 
        path="/pitch-multiplication"
        element={<PitchMultiplication/>}
      />
      <Route
        path="/total-serialism"
        element={<TotalSerialism/>}
      />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
