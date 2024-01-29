function areAnagrams(str1, str2) {
  var processedStr1 = str1.replace(/\s/g, "").toLowerCase();
  var processedStr2 = str2.replace(/\s/g, "").toLowerCase();

  var sortedStr1 = processedStr1.split("").sort().join("");
  var sortedStr2 = processedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("Astronomer", "Moon starer")); // Should return true
console.log(areAnagrams("School master", "The classroom")); // Should return true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should return true
console.log(areAnagrams("Hello", "World")); // Should return false
