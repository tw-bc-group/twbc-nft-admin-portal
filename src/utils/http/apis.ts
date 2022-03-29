import { httpInstance } from "./index";

async function getNFTDetail(id: string | undefined) {
  const path = `/nft/${id}`;
  return httpInstance.get(path).then((response) => response.data);
}

async function getNFTList() {
  const path = `/nft`;
  return httpInstance.get(path).then((response) => response.data);
}

export { getNFTDetail, getNFTList };
