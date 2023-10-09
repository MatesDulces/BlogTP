import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lista from './Lista';
//import CommenBox from './CommenBox';
//import AddPostForm from './AddPostForm'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/Markdown' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
