import { get } from "lodash";

const DEVELOPMENT_API_URL = '/';
const PRODUCTION_API_URL = '/';
const environment = process.env.NODE_ENV || 'development';

const URL_MAP = {
  development: DEVELOPMENT_API_URL,
  production: PRODUCTION_API_URL,
};

const BASE_URL = get(URL_MAP, environment);

export default BASE_URL;
