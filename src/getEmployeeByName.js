const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const workersData = employees.map((employeer) => employeer);
  const unitWorkerData = workersData.find((workerData) =>
    ((workerData.firstName) === employeeName || (workerData.lastName) === employeeName));
  return unitWorkerData;
}

module.exports = getEmployeeByName;
