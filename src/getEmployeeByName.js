const data = require('../data/zoo_data');

const { employees } = data;
//  employees é um array de objetos

function getEmployeeByName(employeeName) {
  // seu código aqui
  const workerData = employees.map((employeer) => employeer);
  const findWorker = workerData.find((worker) => worker.name === employeeName);
  return findWorker;
}
console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
