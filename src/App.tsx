import React from 'react';
import { Layout } from 'antd';
import NFTList from './routes/list'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

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
    <Routes>
      <Route path="/" element={<NFTList/>} />
    </Routes>
  </Router>
);

export default App;
