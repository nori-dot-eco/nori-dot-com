import { multiply, add, subtract, divide } from '../math';

describe('multiply', () => {
  it('should multiply correctly', () => {
    expect(multiply(0.1, 0.2)).toEqual(0.02);
  });
});
describe('divide', () => {
  it('should divide correctly', () => {
    expect(divide(0.1, 0.2)).toEqual(0.5);
  });
});

describe('add', () => {
  it('should add correctly', () => {
    expect(add(0.1, 0.2)).toEqual(0.3);
  });
});
describe('subtract', () => {
  it('should subtract correctly', () => {
    expect(subtract(0.1, 0.2)).toEqual(-0.1);
  });
});
