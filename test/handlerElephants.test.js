const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  const elephantsName = handlerElephants('names');
  const elephantsAvailability = handlerElephants('availability');
  test('Retorna undefined caso não seja passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('Retorna valor 4 ao receber parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Retorna um array com o nome de todos os elefantes', () => {
    expect(elephantsName).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Verifica se o array retorna Jefferson', () => {
    expect(elephantsName).toContain('Jefferson');
  });
  test('Retorna um array com o nome de todos os elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('Retorna a localização dos elefantes dentro do zoo', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Retorna um array com os dias possívels para visitação dos elefantes', () => {
    expect(handlerElephants(elephantsAvailability)).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('Retorna um array com os dias possívels para visitação dos elefantes', () => {
    expect(handlerElephants(elephantsAvailability)).toContain('Monday');
  });
});
