const data = require('../data/zoo_data');

const { species } = data;

function allAnimalsList(acc, value, index) {
  const speciesQuantity = species.map((specie) => specie.residents.length);
  return { ...acc, [value]: speciesQuantity[index] };
}

function checkingSex(animalSex, specieData) {
  const { residents } = specieData;
  if (animalSex === 'female') {
    const residentSex = residents.filter((resident) => resident.sex === 'female');
    return residentSex.length;
  } if (animalSex === 'male') {
    const residentSex = residents.filter((resident) => resident.sex === 'male');
    return residentSex.length;
  } return specieData.residents.length;
}

function countAnimals(animal) {
  const speciesData = species.map((specie) => specie);
  const speciesName = species.map((specie) => specie.name);
  if (!animal) {
    return speciesName.reduce(allAnimalsList, {});
  }
  const specieData = speciesData.find((specie) => specie.name === animal.specie);
  return checkingSex(animal.sex, specieData);
}
console.log(countAnimals());
module.exports = countAnimals;
