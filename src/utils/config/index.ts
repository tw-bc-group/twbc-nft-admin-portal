import { get } from "lodash";

const DEVELOPMENT_API_URL = "https://dev.api.nft.cn.blockchain.thoughtworks.cn/";
const PRODUCTION_API_URL = "https://dev.nft.cn.blockchain.thoughtworks.cn/";
const environment = process.env.NODE_ENV || "development";

const URL_MAP = {
  development: DEVELOPMENT_API_URL,
  production: PRODUCTION_API_URL,
};

const BASE_URL = get(URL_MAP, environment);

export default BASE_URL;
