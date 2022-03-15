import React from 'react';
import { Button } from 'antd';
import NFTList from './routes/list'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Button type="primary">NFT home page</Button>
    </div>
    <Routes>
      <Route path="/" element={<NFTList/>} />
    </Routes>
  </Router>
);

export default App;
