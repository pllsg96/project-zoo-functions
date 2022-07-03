const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const allAnimalsAvailable = species.map((specie) => specie.availability);
  const theAnimal = species.filter((specie) => specie.name === scheduleTarget);
  const animalAvilable = theAnimal.map((avaiable) => avaiable.availability);
  if (!scheduleTarget) return allAnimalsAvailable;
  return animalAvilable[0];
}

console.log(getSchedule());

module.exports = getSchedule;
