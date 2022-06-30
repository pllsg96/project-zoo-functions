const data = require('../data/zoo_data');

const { employees } = data;

function getRelatedEmployees(managerId) {
  if (managerId.managers.length !== 0) {
    return console.log('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

function isManager(id) {
  const allEmployees = employees.map((emp) => emp);
  const checkIfIsManeger = allEmployees.find((employeerData) => employeerData.id === id);
  const res = checkIfIsManeger.managers.length === 0;
  getRelatedEmployees(checkIfIsManeger);
  return res;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
