const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Se retorna o número 4', () => {
    expect(handlerElephants('count').toBe(4));
  });
});
