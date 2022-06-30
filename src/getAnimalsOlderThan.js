const data = require('../data/zoo_data');
const { species } = data;

// species é a array de objetos
//  return searchingTheAnimal.residents.filter((resident)=> resident.age >= age);

function getAnimalsOlderThan(animal, age) {
  const searchingTheAnimal = species.find((specie) => specie.name === animal);
  return searchingTheAnimal.residents.every((resident)=> resident.age >= age);

}

console.log(getAnimalsOlderThan('giraffes',10));

module.exports = getAnimalsOlderThan;
