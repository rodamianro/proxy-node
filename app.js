import httpProxy from "http-proxy";
import EnvironmentConfig from "./src/config/environment.config.js";

const config = new EnvironmentConfig();

httpProxy.createProxyServer(
    {
        target: config.getTargetUrl()
    }
).listen(config.getAppPort());

console.log(`Proxy listening on ${config.getAppPort()}`);
