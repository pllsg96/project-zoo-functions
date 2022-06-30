const data = require('../data/zoo_data');

const { employees } = data;

function getRelatedEmployees(managerId) {
  if (managerId.managers !== 0) {
    try {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    } catch (e) {
      console.log(e);
    }
  }
}

function isManager(id) {
  const allEmployees = employees.map((emp) => emp);
  const checkIfIsManeger = allEmployees.find((employeerData) => employeerData.id === id);
  const res = checkIfIsManeger.managers.length === 0;
  getRelatedEmployees(checkIfIsManeger);
  return res;
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
// firstName: 'Nigel',

module.exports = { isManager, getRelatedEmployees };
