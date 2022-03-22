export interface NFT {
  key: string,
  name: string,
  id: string,
  address: string,
  createdTime: string,
  transferredTime?: string,
}

export const ownedNFTList: NFT[] = [
  {
    key: '#1',
    name: 'Bored Ape',
    id: '#1',
    address: '0xd9d5275d2847f47f15f3f59ebcac9658629d780c',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#2',
    name: 'Bored Ape',
    id: '#2',
    address: '0x21876114ac93f3691a432347a5bf1badc8f8236f',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#3',
    name: 'Bored Ape',
    id: '#3',
    address: '0xcb01d2e53f8a931e9bf8e1a425e886e0cae882f3',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#4',
    name: 'Bored Ape',
    id: '#4',
    address: '0x038996a6ba2b28fdefd0ec00f8a44be645a79de7',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#5',
    name: 'Bored Ape',
    id: '#5',
    address: '0x269ebbee27a823bf27dfceb1351e11acfe178cad',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#6',
    name: 'Crypto Punk',
    id: '#6',
    address: '0xf1ad01a8d50870daaeec0d17d2ce426c7ddd3722',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#7',
    name: 'Crypto Punk',
    id: '#7',
    address: '0x16474f7a4f58c3c94d41999d11657c0f43b87332',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#8',
    name: 'Crypto Punk',
    id: '#8',
    address: '0x1367726d4f3e7d33633e5d33e87822254f9718e4',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#9',
    name: 'Crypto Punk',
    id: '#9',
    address: '0xd9d5275d2847f47f15f3f59ebcac9658629d780c',
    createdTime: '2022-2-21 16:24',
  },
  {
    key: '#10',
    name: 'Crypto Punk',
    id: '#10',
    address: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
    createdTime: '2022-2-21 16:24',
  },
]

export const transferredNFTList: NFT[] = [
  {
    key: '#6',
    name: 'Crypto Punk',
    id: '#6',
    address: '0xf1ad01a8d50870daaeec0d17d2ce426c7ddd3722',
    createdTime: '2022-2-21 16:24',
    transferredTime: '2022-2-21 16:24',
  },
]
