import operate from '../logic/operate';

describe('Operate calculation', () => {
  test('9 plus 9', () => {
    const result = operate(9, 9, '+');
    expect(result).toBe('18');
  });
  test('9 minus 9', () => {
    const result = operate(9, 9, '-');
    expect(result).toBe('0');
  });
  test('9 times 9', () => {
    const result = operate(9, 9, 'x');
    expect(result).toBe('81');
  });
  test('9 divided 9', () => {
    const result = operate(9, 9, '/');
    expect(result).toBe('1');
  });
});
