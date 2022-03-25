import httpClient from "./index";

async function getNFTDetail(id: Number) {
  const path = `/nft/${id}`
  return httpClient.get(path)
}

export const Apis = {
  getNFTDetail
}
