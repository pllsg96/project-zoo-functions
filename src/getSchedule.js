const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDaysOn = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekDaysOff = ['Monday'];

function animalsBySpecie(spec) {
  const abs = species.filter((specie) => specie.name === spec);
  const theAvaSpec = abs[0].availability;
  return theAvaSpec;
}

function animalsByDay(day) {
  const abd = species.filter((spe) => spe.availability.includes(day)).map((spe) => spe.name);
  return abd;
}

function turnOnDays() {
  const allInfoExibition = weekDaysOn.reduce((map, day) => ({
    ...map,
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalsByDay(day),
    },
  }), {});
  return allInfoExibition;
}

function turnOffDays() {
  const allInfoExibition = weekDaysOff.reduce((map, day) => ({
    ...map,
    [day]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  }), {});
  return allInfoExibition;
}

function exibAll() {
  const a = turnOnDays();
  const b = turnOffDays();
  const c = { ...b, ...a };

  return c;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget) return animalsBySpecie(scheduleTarget);
  if (!scheduleTarget) return exibAll();
}

console.log(getSchedule('elephants'));
// animalsByDay('Tuesday');

module.exports = getSchedule;
