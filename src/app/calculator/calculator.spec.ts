import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;

  beforeEach(() => {
    component = new Calculator();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should add two numbers', () => {
    component.add('2', '3');
    expect(component.result).toBeCloseTo(5);
  });

  it('should subtract two numbers', () => {
    component.sub('5', '3');
    expect(component.result).toBeCloseTo(2);
  });

  it('should multiply two numbers', () => {
    component.mul('4', '3');
    expect(component.result).toBeCloseTo(12);
  });

  it('should divide two numbers', () => {
    component.div('10', '2');
    expect(component.result).toBeCloseTo(5);
  });

  it('should handle decimal inputs', () => {
    component.add('1.5', '2.25');
    expect(component.result).toBeCloseTo(3.75);
  }); 
});
