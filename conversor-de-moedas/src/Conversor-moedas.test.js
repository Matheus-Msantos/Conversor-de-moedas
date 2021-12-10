import React from 'react';
import reactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import ConversorMoedas from './Conversor-moedas';

test('Deve rendenrizar sem erros', () => {
  render(<ConversorMoedas />);
});
