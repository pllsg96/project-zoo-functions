const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const specieAge = [];

function getOldestFromFirstSpecies(id) {
  const getEmpById = employees.filter((emp) => emp.id === id);
  const getResponsibleSpecies = getEmpById.map((speciesId) => speciesId.responsibleFor);
  const getAllSpecies = species.filter((specie) => specie.id === getResponsibleSpecies[0][0]);
  const getAllSpeciesAge = getAllSpecies[0].residents.map((oldest) => oldest.age);
  getAllSpeciesAge.sort((a, b) => b - a);
  const finalAge = getAllSpecies[0].residents.find((x) => x.age === getAllSpeciesAge[0]);
  specieAge.push(finalAge.name);
  specieAge.push(finalAge.sex);
  specieAge.push(finalAge.age);
  return specieAge;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
