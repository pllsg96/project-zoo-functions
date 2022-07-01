const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const ourWorkers = employees.some((employeer) => employeer.managers.includes(id));
  return ourWorkers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const filterResponsible = employees.filter((employ) => employ.managers.includes(managerId));
    return filterResponsible.map((empregados) => `${empregados.firstName} ${empregados.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', Nigel

// stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992'; stephanie

// const ourWokers = employees.map((employeer) => employeer); // Retorna de forma genérica todos os empregados
//   const isThisIdAManager = ourWokers.find((worker) => worker.id === id); // Retorna o elemento com o id procurado
//   const walkingThroughIds = ourWokers.map((worker) => worker.id); // Caminha por todos os iDs
//   // const aaa = isThisIdAManager.responsibleFor.some(checkingEverybody());
//   return { isThisIdAManager, walkingThroughIds };
module.exports = { isManager, getRelatedEmployees };
