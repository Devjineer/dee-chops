import { config } from "dotenv";
config();

const require = (key, defaultKey) => {
  return process.env[key] || defaultKey;
};

const envConfig = {
  node_env: require("NODE_ENV"),
  port: require("PORT", 3000),
};

export default envConfig;
