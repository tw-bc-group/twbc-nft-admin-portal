import React from 'react'
import { some } from 'lodash'
import { SWRConfig } from 'swr'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NFTList from './routes/List'
import CreateNFT from './routes/CreateNFT'
import NFTDetail from './routes/Detail'
import NFTHeader from './components/Header'
import Navigation from './components/Navigation'
import Login from './routes/Login'
import { fetcher } from './utils/http'
import './App.less'
import { Forbidden } from './routes/Forbidden'

const isPublicUrl = ['/login', '/forbidden']

const SWRConfigValue = {
  fetcher: fetcher
}

const Header = () => {
  const location = useLocation()

  if (some(isPublicUrl, item => location.pathname.startsWith(item))) {
    return null
  }

  return (
    <>
      <NFTHeader/>
      <Navigation/>
    </>
  )
}

const App = () => {
  return (
    <SWRConfig value={SWRConfigValue}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<NFTList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/detail/:id" element={<NFTDetail/>}/>
          <Route path="/create" element={<CreateNFT/>}/>
          <Route path="/forbidden" element={<Forbidden/>}/>
        </Routes>
      </Router>
    </SWRConfig>
  )
}

export default App;
