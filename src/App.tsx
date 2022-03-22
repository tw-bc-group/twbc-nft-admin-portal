import React from 'react';
import { Layout } from 'antd';
import NFTList from './routes/list'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.less';
import CreateNFT from './routes/createNFT'
import TransferNFT from './routes/TransferNFT';
import NFTDetail from './routes/Detail';
import NFTHeader from './components/Header'

const { Header } = Layout

const App = () => (
  <Router>
    <NFTHeader />
    <div className="container">
      <Routes>
        <Route path="/" element={<NFTList/>} />
        <Route path="/detail" element={<NFTDetail/>} />
        <Route path="/create" element={<CreateNFT/>} />
        <Route path="/transfer" element={<TransferNFT/>} />
      </Routes>

    </div>
  </Router>
);

export default App;
