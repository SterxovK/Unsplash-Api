const ACCESS_KEY = "q_Lq0TSjkxLS8SGI1ccI_qDxLddRn5HI6ZkE2ZrTWuw";
const API_URL = "https://api.unsplash.com/";
class Api {
  constructor({ url, accessKey }) {
    this.url = url;
    this.accessKey = accessKey;
  }

  search({ query }) {
    return fetch(`${this.url}/search/photos?query=${query}`, {
      headers: {
        Authorization: `${this.accessKey}`,
      },
    }).then((response) => response.json());
  }
}
const config = {
  url: API_URL,
  accessKey: ACCESS_KEY,
};

const api = new Api(config);

export default Api;
