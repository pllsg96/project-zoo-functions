const data = require('../data/zoo_data');

const speciesId = [];

const compareSpecieId = (...species) => species[0].forEach((s) => {
  const { id } = s;
  speciesId.push(id);
});

function getSpeciesByIds(lookingForThisId) {
  let theId = '';
  for (let index = 0; index < speciesId.length; index += 1) {
    if (lookingForThisId === speciesId[index]) {
      theId = speciesId[index];
      console.log(typeof theId);
    }
  }
  console.log(data.species[0]);
}
compareSpecieId(data.species);
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
