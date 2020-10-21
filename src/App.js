import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Component/Layout';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
