import Utils from './util.js'

function isHttpUrl(input) {
  return /^https?:\/\//.test(input);
}

function urlHandle(config) {
  const feed = config.url;
  config.url = isHttpUrl(feed) ? feed : `${Utils.getPrefix()}${feed}`;
  return config;
}

function wxRequstHandle(config) {
  config = urlHandle(config);
  wx.request(Object.assign({
    url: '',
    data:'',
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  }, config))
}


export default {
  get: function (url, config) {
    return wxRequstHandle(Object.assign({
      method: 'get',
      url: url,
    }, config))
  },
  post: function (url, config) {
    console.info(config)
    return wxRequstHandle(Object.assign({
      method: 'post',
      url: url,
    }, config))
  },
}
