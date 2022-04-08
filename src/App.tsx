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

// admin links
const NFTList = React.lazy(() => import('./routes/List'))
const CreateNFT = React.lazy(() => import('./routes/CreateNFT'))
const Login = React.lazy(() => import('./routes/Login'))
const NFTDetail = React.lazy(() => import('./routes/Detail'))

const DenomRoute = {
  list: React.lazy(() => import('./routes/Denoms/List')),
  create: React.lazy(() => import('./routes/Denoms/Create')),
  nfts: {
    list: React.lazy(() => import('./routes/Denoms/NFTs/List')),
    create: React.lazy(() => import('./routes/Denoms/NFTs/Create'))
  }
}

// mobile links
const MobileDenomRoute = {
  list: React.lazy(() => import('./routes/Mobile/MobileDenom')),
  nfts: {
    list: React.lazy(() => import('./routes/Mobile/MobileNFTList')),
    details: React.lazy(() => import('./routes/Mobile/MobileNFTDetail'))
  }
}

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
            <Route path="/" element={<DenomRoute.list />} />
            <Route path="/denoms/create" element={<DenomRoute.create />} />
            <Route
              path="/denoms/:denomId/collections"
              element={<DenomRoute.nfts.list />}
            />
            <Route
              path="/denoms/:denomId/collections/create"
              element={<DenomRoute.nfts.create />}
            />
            <Route path="/nfts" element={<NFTList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nfts/detail/:denomId/:id" element={<NFTDetail />} />
            <Route path="/create" element={<CreateNFT />} />

            <Route path="/mobile/denom" element={<MobileDenomRoute.list />} />
            <Route
              path="/mobile/nfts"
              element={<MobileDenomRoute.nfts.list />}
            />
            <Route
              path="/mobile/nfts/detail/:denomId/:id"
              element={<MobileDenomRoute.nfts.details />}
            />

            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </Router>
      </SWRConfig>
    </Suspense>
  )
}

export default App
