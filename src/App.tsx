import React from 'react';
import NFTList from './routes/List'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.less';
import CreateNFT from './routes/CreateNFT'
import TransferNFT from './routes/TransferNFT';
import NFTDetail from './routes/Detail';
import NFTHeader from './components/Header'

const App = () => (
  <Router>
    <NFTHeader />
    <Routes>
      <Route path="/" element={<NFTList/>} />
      <Route path="/detail" element={<NFTDetail/>} />
      <Route path="/create" element={<CreateNFT/>} />
      <Route path="/transfer" element={<TransferNFT/>} />
    </Routes>
  </Router>
);

export default App;
