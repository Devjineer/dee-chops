import app from "./app.js";
import envConfig from "./config/config.js";

app.listen(envConfig.port, () => {
  console.log("Server is listening on port: ", envConfig.port);
});
