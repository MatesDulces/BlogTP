import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lista from './Lista';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import CommenBox from './CommenBox';
//import AddPostForm from './AddPostForm'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App></App>
  <Lista></Lista>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/markdown' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
