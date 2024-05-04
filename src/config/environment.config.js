import { config } from "dotenv";

/**
 * Provide config class
 */
export default class EnvironmentConfig {

    /**
     * Constructor
     */
    constructor() {
        config();
        this.env = process.env;
    }

    getConfigs() {
        return {
            port: this.env.PORT || 3000,
            proxyTarget: this.env.TARGET_URL || 'http://localhost'
        }
    }

    getAppPort() {
        return this.getConfigs().port;
    }

    getTargetUrl() {
        return this.getConfigs().proxyTarget;
    }
}