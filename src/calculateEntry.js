const data = require('../data/zoo_data');

const visitors = {};

function countEntrants(entrants) {
  const childs = entrants.filter((entrant) => entrant.age < 18);
  const adults = entrants.filter((entrant) => (entrant.age >= 18 && entrant.age < 50));
  const seniors = entrants.filter((entrant) => entrant.age >= 50);
  visitors.child = (childs.length);
  visitors.adult = (adults.length);
  visitors.senior = (seniors.length);
  return visitors;
}

function sumObjects(x) {
  return ((x.child * 20.99) + (x.adult * 49.99) + (x.senior * 24.99));
}

function calculateEntry(entrants) {
  if (!entrants || (Object.values(entrants).length === 0)) return 0;
  countEntrants(entrants);
  return sumObjects(visitors);
}

module.exports = { calculateEntry, countEntrants };
