require("dotenv").config();

class Api {
  constructor({ apiKey, url }) {
    this._url = url + apiKey;
    this._pathGetCodes = "/codes";
  }

  _checkResponse(response) {
    return response.ok ? response.json : Promise.reject(response.StatusText);
  }

  _fetchServer(path) {
    return fetch(this._url + path, {
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  getSupportedCodes() {
    return this._fetchServer(this._pathGetCodes);
  }

  getExchangeRate(currencyCode) {
    return this._fetchServer(this._url + "/latest/" + currencyCode).then(
      (res) => this._checkResponse(res)
    );
  }
}

A;
export const api = new Api({
  apiKey: process.env.API_KEY,
  url: "https://v6.exchangerate-api.com/v6/",
});
