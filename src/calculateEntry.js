const data = require('../data/zoo_data');

const visitors = {};
const teste = [
  { name: 'aaa', age: 5 },
  { name: 'bbb', age: 50 },
];

function countEntrants(entrants) {
  const childs = entrants.filter((entrant) => entrant.age < 18);
  const adults = entrants.filter((entrant) => (entrant.age >= 18 && entrant.age < 50));
  const seniors = entrants.filter((entrant) => entrant.age >= 50);
  visitors.child = (childs.length);
  visitors.adult = (adults.length);
  visitors.senior = (seniors.length);
  return visitors;
}

function sumObjects(entrants) {
  return ((entrants.child * 20.99) + (entrants.adult * 49.99) + (entrants.senior * 24.99));
}

function calculateEntry(entrants) {
  console.log(entrants);
  if (!entrants || (Object.values(entrants).length === 0)) return 0;
  if (!(Array.isArray(entrants))) {
    return sumObjects(entrants);
  }
  if (Array.isArray(entrants)) {
    return entrants[0];
  }
}

// prices: {
//   adult: 49.99,
//   senior: 24.99,
//   child: 20.99,
// },

countEntrants(teste);
console.log(calculateEntry(visitors));
module.exports = { calculateEntry, countEntrants };
