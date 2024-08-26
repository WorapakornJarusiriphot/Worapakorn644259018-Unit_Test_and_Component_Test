// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BMICalculatorComponent from './BMICalculatorComponent';



// eslint-disable-next-line no-undef
describe('BMICalculatorComponent', () => {
  // eslint-disable-next-line no-undef
  test('renders correctly', () => {
    render(<BMICalculatorComponent />);
    
    // ตรวจสอบการแสดงหัวข้อ
    // eslint-disable-next-line no-undef
    expect(screen.getByText(/BMI Calculator/i)).toBeInTheDocument();
    // ตรวจสอบการแสดงปุ่ม Calculate BMI
    // eslint-disable-next-line no-undef
    expect(screen.getByRole('button', { name: /Calculate BMI/i })).toBeInTheDocument();

  });
});

  // eslint-disable-next-line no-undef
  test('text is not show', () => {
    render(<BMICalculatorComponent />);
    // ควรไม่แสดงผลลัพธ์
    // eslint-disable-next-line no-undef
    expect(screen.queryByText(/Your BMI is:/i)).not.toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.queryByText(/Interpretation:/i)).not.toBeInTheDocument();
  });