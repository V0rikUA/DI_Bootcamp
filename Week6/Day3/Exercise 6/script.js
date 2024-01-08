let jobTitle = prompt("What is your job name?");
let geoLocation = prompt("Where do you live(country)?");
let partnerName = prompt("Enter yours wife/husband name");
let amountOfChildren = prompt("how many children do you have?");
(function (jobTitle, geoLocation, partnerName, amountOfChildren) {
  const p = document.createElement("p");
  p.textContent = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${amountOfChildren} kids.`;
  document.body.append(p);
})(jobTitle, geoLocation, partnerName, amountOfChildren);
