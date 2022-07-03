const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmpById = employees.filter((emp) => emp.id === id);
  const getResponsibleSpecies = getEmpById.map((speciesId) => speciesId.responsibleFor);
  const getAllSpecies = species.filter((specie) => specie.id === getResponsibleSpecies[0][0]);
  const getAllSpeciesAge = getAllSpecies[0].residents.map((oldest) => oldest.age);
  getAllSpeciesAge.sort((a, b) => b - a);
  const finalAge = getAllSpecies[0].residents.find((x) => x.age === getAllSpeciesAge[0]);

  return [finalAge.name, finalAge.sex, finalAge.age];
}

module.exports = getOldestFromFirstSpecies;
