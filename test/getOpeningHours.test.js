const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Retorna informando se o zoo estará aberto segunda-feira', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  test('Retorna informando se o zoo estará aberto terça-feira, as 9', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  test('Retorna informando se o zoo estará aberto quarta-feira, as 9', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  test('Retorna informando se o parâmetro AM ou PM está correto', () => {
    expect(getOpeningHours('Wednesday', '09:00-PX')).toEqual('throw new Error(\'The abbreviation must be \'AM\' or \'PM\'\')');
  });
  test('Retorna informando se o formato de hora hh:mm:xx está sendo atendido', () => {
    expect(getOpeningHours('Wednesday', '09-00-PM')).toEqual('Error: The minutes should represent a number');
  });
  test('Retorna erro quando passado um parâmetro de dia diferente do usual', () => {
    expect(getOpeningHours('Wed', '09-00-AM')).toEqual('The day must be valid. Example: Monday');
  });
  test('Retorna todos os dias e horários se não houver parâmetros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
