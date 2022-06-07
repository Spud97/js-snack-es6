const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const newArray = [];

myArray.forEach((elemento, index) => {
  if ((index < 5) & (index > 1)) {
    newArray.push(elemento);
  }
});

console.log(newArray);

const myArrayFilter = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara",];

const nomiScelti = myArrayFilter.filter((nome, indice) => indice < 5 && indice > 1);

console.log(nomiScelti);