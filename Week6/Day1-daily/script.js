const solarSystem = [
  { name: "Mercury", color: "grey", moons: [] },
  { name: "Venus", color: "yellow", moons: [] },
  { name: "Earth", color: "blue", moons: ["Moon"] },
  { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
  { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
  { name: "Saturn", color: "gold", moons: ["Titan", "Rhea", "Iapetus"] },
  { name: "Uranus", color: "lightblue", moons: ["Titania", "Oberon", "Umbriel"] },
  { name: "Neptune", color: "darkblue", moons: ["Triton", "Proteus"] }
];

function createSolarSystem() {
  const listPlanetsSection = document.querySelector('.listPlanets');

  solarSystem.forEach((planet, index) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;

    // Create moons for each planet
    planet.moons.forEach((moon, moonIndex) => {
      const moonDiv = document.createElement('div');
      moonDiv.classList.add("moon");
      moonDiv.style.left = `${50 + 40 * Math.cos(0.5 * Math.PI * moonIndex / planet.moons.length)}px`;
      moonDiv.style.top = `${50 + 40 * Math.sin(0.5 * Math.PI * moonIndex / planet.moons.length)}px`;
      planetDiv.appendChild(moonDiv);
    });

    listPlanetsSection.appendChild(planetDiv);
  });
}

createSolarSystem();