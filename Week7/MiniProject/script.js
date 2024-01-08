import { api } from "./utils/api.js";

const getCharacter = async (id) => {
  const character = await api
    .getPerson(id)
    .then((data) => {
      return data.result.properties;
    })
    .catch((err) => {
      throw Error(
        `Cannot get character from api.\nError message: ${err.message}`
      );
    });

  return character;
};

const getPlanetName = async (id) => {
  const planetName = await api
    .getPlanet(id)
    .then((data) => data.result.properties.name)
    .catch((err) => {
      throw Error(
        `Cannot get planet name from api.\nError message: ${err.message}`
      );
    });

  return planetName;
};

function updateDOM(character, characterInfoElement) {
  characterInfoElement.innerHTML = `
    <h2>${character.name}</h2>
    <p>Height: ${character.height}</p>
    <p>Gender: ${character.gender}</p>
    <p>Birth Year: ${character.birth_year}</p>
    <p>Home World: ${character.homeworldName}</p>
    `;
}

const updateDomError = (characterInfoElement) => {
  characterInfoElement.innerHTML = `
  <h2>Oh no!! This person isnt available.</>`;
};

function getIdFromUrl(url) {
  return url.match(/(\d+)/)[0];
}

document.addEventListener("DOMContentLoaded", function () {
  const fetchButton = document.getElementById("fetchButton");
  const loadingIndicator = document.getElementById("loading");
  const characterInfo = document.getElementById("characterInfo");

  async function displayCharacter() {
    let character;

    /**
     * generates random number greater than maximum possible id from api to simulate false requests
     */
    const characterId = Math.floor(Math.random() * 100);

    try {
      characterInfo.innerHTML = "";
      loadingIndicator.classList.remove("hidden");

      character = await getCharacter(characterId);
      const planetName = await getPlanetName(getIdFromUrl(character.homeworld));
      character.homeworldName = planetName;
    } catch (error) {
      updateDomError(characterInfo);
    } finally {
      loadingIndicator.classList.add("hidden");
      if (character) {
        updateDOM(character, characterInfo);
      }
    }
  }

  fetchButton.addEventListener("click", function () {
    displayCharacter();
  });
});
