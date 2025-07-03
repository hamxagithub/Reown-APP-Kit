// URL polyfill
export default {
  URL: class URL {
    constructor(url) {
      this.url = url;
    }
  },
  URLSearchParams: class URLSearchParams {
    constructor(params) {
      this.params = params;
    }
  }
};
