import React from 'react';
import { Layout } from 'antd';
import NFTList from './routes/list'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NFTDetail from './routes/detail'
import CreateNFT from './routes/createNFT'

const { Header } = Layout

const App = () => (
  <Router>
    <Header className="header">
      <div className="header-left">
        <div className="logo" />
        <div className="portal">Portal</div>
      </div>
      <div className="user-name">Admin username</div>
    </Header>
    <div className="container">
      <Routes>
        <Route path="/" element={<NFTList/>} />
        <Route path="/detail" element={<NFTDetail/>} />
        <Route path="/create" element={<CreateNFT/>} />
      </Routes>

    </div>
  </Router>
);

export default App;
