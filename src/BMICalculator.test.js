import BMICalculator from './BMICalculator';

// eslint-disable-next-line no-undef
describe('BMICalculator', () => {
  let bmiCalculator;

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    bmiCalculator = new BMICalculator();
  });

  // eslint-disable-next-line no-undef
  describe('calculateBMI', () => {
    // eslint-disable-next-line no-undef
    it('should return the correct BMI', () => {
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.calculateBMI(60, 1.75)).toBeCloseTo(19.59, 2);
    });

    // eslint-disable-next-line no-undef
    it('should return an error message for invalid input', () => {
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.calculateBMI(-60, 1.75)).toBe("Invalid input. Weight and height must be positive values.");
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.calculateBMI(60, -1.75)).toBe("Invalid input. Weight and height must be positive values.");
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.calculateBMI(0, 1.75)).toBe("Invalid input. Weight and height must be positive values.");
    });
  });

  // eslint-disable-next-line no-undef
  describe('interpretBMI', () => {
    // eslint-disable-next-line no-undef
    it('should correctly interpret BMI', () => {
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.interpretBMI(18)).toBe("Underweight");
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.interpretBMI(22)).toBe("Normal weight");
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.interpretBMI(28)).toBe("Overweight");
      // eslint-disable-next-line no-undef
      expect(bmiCalculator.interpretBMI(30)).toBe("Obese");
    });
  });
});