import React, { Suspense } from 'react'
import { some } from 'lodash'
import { SWRConfig } from 'swr'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

import NFTHeader from './components/Header'
import Navigation from './components/Navigation'
import { fetcher } from './utils/http'
import './App.less'
import { Forbidden } from './routes/Forbidden'

const NFTList = React.lazy(() => import('./routes/List'))

const CreateNFT = React.lazy(() => import('./routes/CreateNFT'))
const Login = React.lazy(() => import('./routes/Login'))
const NFTDetail = React.lazy(() => import('./routes/Detail'))
const MobileNFTDetail = React.lazy(
  () => import('./routes/Mobile/MobileNFTDetail')
)
const MobileNFTList = React.lazy(() => import('./routes/Mobile/MobileNFTList'))

const isPublicUrl = ['/login', '/forbidden', '/mobile']

const SWRConfigValue = {
  fetcher: fetcher
}

const Header = () => {
  const location = useLocation()

  if (some(isPublicUrl, (item) => location.pathname.startsWith(item))) {
    return null
  }

  return (
    <>
      <NFTHeader />
      <Navigation />
    </>
  )
}

const App = () => {
  return (
    <Suspense fallback={null}>
      <SWRConfig value={SWRConfigValue}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<NFTList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nfts/detail/:denomId/:id" element={<NFTDetail />} />
            <Route path="/create" element={<CreateNFT />} />
            <Route path="/mobile/nfts" element={<MobileNFTList />} />
            <Route
              path="/mobile/nfts/detail/:denomId/:id"
              element={<MobileNFTDetail />}
            />
            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </Router>
      </SWRConfig>
    </Suspense>
  )
}

export default App
