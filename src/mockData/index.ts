import { fill } from 'lodash'

const mockNFT = {
  name: 'NFT name',
  id: '12345678',
  address: '0xs21awwer214mfd093141',
  createdTime: '2022-2-20',
}

export const nftList = fill(Array(60), mockNFT)
