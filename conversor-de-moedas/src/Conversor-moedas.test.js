import React from 'react';
import ConversorMoedas from './Conversor-moedas';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';

describe('Teste conversor de moedas', () => {
  test('Deve rendenrizar sem erros', () => {
    render(<ConversorMoedas />);
  });

  it('simular uma converção', async () => {

    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 1, USD: 1.131676 } }
    });

    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 1.13 USD');

  });
});
