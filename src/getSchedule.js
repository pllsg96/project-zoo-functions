const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const outlander = {
  Monday: {},
  Tuesday: {},
  Wednesday: {},
  Thursday: {},
  Friday: {},
  Saturday: {},
  Sunday: {},
};

function animalsByDay() {
  const exist = weekDays.map((day) => species.filter((spe) => spe.availability.includes(day)));
  const abd = exist.map((e) => e.map((y) => y.name));
  return abd;
}

function exibAll() {
  const a = weekDays.forEach((day) => { day.ss = '22'; });
  return a;
  //------------------------------------------
  // const allInfoExibition = weekDays.reduce((map, day) => ({
  //   ...map, [day]: `Open from ${hours[day].open}am until ${hours[day].close}`,
  // }), {});
  // return allInfoExibition;
}

function getSchedule(scheduleTarget) {
  const theAnimal = species.filter((specie) => specie.name === scheduleTarget);
  const animalAvilable = theAnimal.map((avaiable) => avaiable.availability);
  if (!scheduleTarget) return exibAll();
  return animalAvilable;
}

console.log(getSchedule());
console.log(animalsByDay());

module.exports = getSchedule;
