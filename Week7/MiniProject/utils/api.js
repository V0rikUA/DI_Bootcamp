class API {
  constructor() {
    this._url = "https://www.swapi.tech/api";
    this._personPath = "/people/";
    this._planetPath = "/planets/";
  }

  _checkResponce(responce) {
    return responce.ok ? responce.json() : Promise.reject(responce);
  }

  _fetchData(path) {
    return fetch(this._url + path, {
      metod: "GET",
    }).then((res) => this._checkResponce(res));
  }

  /**
   * Retrieves the data for a person by their unique identifier. This function
   * calls `_fetchData` which performs a GET request and uses `_checkResponse`
   * to handle the response.
   *
   * @param {string} id - The unique identifier for the person.
   * @returns {Promise<Object>} A promise that resolves to the person's data if the response is successful.
   *                           If the response is not successful, the promise is rejected with the response object.
   * @example
   * getPerson("12345")
   *   .then(personData => console.log(personData))
   *   .catch(error => console.error("Failed to fetch person data:", error));
   */
  getPerson(id) {
    return this._fetchData(this._personPath + id);
  }

  /**
   * Retrieves the data for a person by their unique identifier. This function
   * calls `_fetchData` which performs a GET request and uses `_checkResponse`
   * to handle the response.
   *
   * @param {string} id - The unique identifier for the person.
   * @returns {Promise<Object>} A promise that resolves to the person's data if the response is successful.
   *                           If the response is not successful, the promise is rejected with the response object.
   * @example
   * getPlanet("12345")
   *   .then(planetData => console.log(planetData))
   *   .catch(error => console.error("Failed to fetch planet data:", error));
   */
  getPlanet(id) {
    return this._fetchData(this._planetPath + id);
  }
}

/**
 * This Api was desighned to fetch data from https://www.swapi.tech/
 */
export const api = new API();
