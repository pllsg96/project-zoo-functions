const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekDaysOn = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekDaysOff = ['Monday'];
const theAnimalList = species.map((specie) => specie.name);

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
// const x = exibAll()[scheduleTarget];
//   const y = JSON.stringify(x);
//   if (checkIfIsDay) return (`${scheduleTarget} : ${y}`);
function checkingAll(scheduleTarget, checkIfIsAnimal, checkIfIsDay) {
  if (!checkIfIsAnimal && !checkIfIsDay) return exibAll();
  if (checkIfIsAnimal) return animalsBySpecie(scheduleTarget);
  const x = [exibAll()];
  // const y = x.find((d) => Object.keys(d) === scheduleTarget);
  if (checkIfIsDay) return Object.keys(x[0]);
}

function getSchedule(scheduleTarget) {
  const checkIfIsAnimal = theAnimalList.some((animal) => animal === scheduleTarget);
  const checkIfIsDay = weekDays.some((day) => day === scheduleTarget);
  if (!scheduleTarget) return exibAll();
  return checkingAll(scheduleTarget, checkIfIsAnimal, checkIfIsDay);
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
