function kgToGr1(weightKg){
  return weightKg*1000;
}

console.log(kgToGr1(2));

const kgToGr2 = function(weightKg){
  return weightKg*1000;
}

console.log(kgToGr1(2));

const kgToGr = (weightKg) => weightKg*1000;

console.log(kgToGr(2));

// Function declarations load before any code is executed.
// Function expressions and arrow function load only when the interpreter reaches that line of code.