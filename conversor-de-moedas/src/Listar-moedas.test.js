import React from 'react';
import reactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import ListarMoedas from './Listar-moedas';

test('Deve rendenrizar listagem de moedas sem erros', () => {
    render(<ListarMoedas />);
});
