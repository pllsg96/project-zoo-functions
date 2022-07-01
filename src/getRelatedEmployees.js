const data = require('../data/zoo_data');

const { employees } = data;

function getRelatedEmployees() {
  // throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

function isManager(id) {
  const allEmployees = employees.map((emp) => emp);
  const checkIfIsManager = allEmployees.find((employeerData) => employeerData.id === id);
  return allEmployees.some((thereIs) => checkIfIsManager.map((managementCheck) => managementCheck.id === thereIs));
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
// firstName: 'Nigel',

// stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

module.exports = { isManager, getRelatedEmployees };
