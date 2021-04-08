import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
