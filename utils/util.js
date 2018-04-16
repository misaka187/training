import Config from './config.js'

const Utils = {
  isProductEnv() {
    return wx.getSystemInfoSync().platform !== 'devtools';
  },
  getPrefix() {
    if (Utils.isProductEnv()) {
      return Config.env.production;
    }
    return Config.env.dev;
  }
}

export default Utils;