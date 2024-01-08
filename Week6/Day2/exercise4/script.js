let form = document.querySelector("form");

const calculateVolumeSphere = (radius) => {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
};

function onSubmitCalculateVolume(e) {
  e.preventDefault();
  const radius = document.querySelector("#radius");
  const volume = document.querySelector("#volume");

  volume.value = calculateVolumeSphere(radius.value);
}

form.addEventListener("submit", onSubmitCalculateVolume);
