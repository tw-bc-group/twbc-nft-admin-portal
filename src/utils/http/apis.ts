import {httpInstance} from "./index";

async function getNFTDetail(id: string | undefined) {
  const path = `/nft/${id}`
  return httpInstance.get(path).then(response => response.data)
}

export const Apis = {
  getNFTDetail
}
