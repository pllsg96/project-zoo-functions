const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesId = [];
const finalSpecieData = [];

const compareSpecieId = (...species) => species[0].forEach((s) => {
  const { id } = s;
  speciesId.push(id);
});
compareSpecieId(data.species);





function getSpeciesByIds(...dataSpecies) {
  if (dataSpecies.length === 0) return [];
  for (let i = 0; i <= dataSpecies.length; i += 1) {
    console.log(dataSpecies[i]);
    for (let j = 0; j < speciesId.length; j += 1) {
      if (speciesId[j] === dataSpecies[i]) {
        finalSpecieData.push(data.species[speciesId.indexOf(speciesId[j])]);
      }
    }  
  }
  return finalSpecieData;
}
getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', '01422318-ca2d-46b8-b66c-3e9e188244ed');

module.exports = getSpeciesByIds;


// const x = speciesId.indexOf(dataSpecies.toString());
// specieDataById.push(data.species[x]);
// return specieDataById;
