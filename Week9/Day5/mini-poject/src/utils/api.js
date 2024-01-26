class API {
  constructor({ link }) {
    this._link = link;
    this._maxResult = 10;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.StatusText);
  }
  _fetch(path) {
    return fetch(this._link + path).then(this._checkResponse);
  }

  getBooksByName(name) {
    const path = `/volumes?q=${name}&maxResults=${this._maxResult}&projection=lite`;
    return this._fetch(path);
  }

  setMaxResult(number) {
    this._maxResult = number;
  }
}

const api = new API({ link: "https://www.googleapis.com/books/v1" });
export default api;
