const ACCESS_KEY = "q_Lq0TSjkxLS8SGI1ccI_qDxLddRn5HI6ZkE2ZrTWuw";
const API_URL = "https://api.unsplash.com";
class Api {
  constructor({ url, accessKey }) {
    this.url = url;
    this.accessKey = accessKey;
  }

  search({ query, per_page = 12}) {
    return fetch(
      `${this.url}/search/photos?query=${query}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`,
        },
      }
    ).then((response) => response.json());
  }
}
const config = {
  url: API_URL,
  accessKey: ACCESS_KEY,
};

const api = new Api(config);

export default api;
