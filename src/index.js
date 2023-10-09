import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lista from './Lista';
//import CommenBox from './CommenBox';
//import AddPostForm from './AddPostForm'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    <BrowserRouter>
      <Routes>
        <Route exact path='/New-Post' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
