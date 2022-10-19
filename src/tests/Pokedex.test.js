import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokedex.js', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading', { level: 2 });
    expect(titlePokedex).toHaveTextContent('Encountered pokémons');
  });
  test('teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextBtn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextBtn).toBeInTheDocument();
  });
  test('testa se tem botão de filtro Fire', () => {
    renderWithRouter(<App />);
    const btnFire = screen.getByRole('button', { name: 'Fire' });
    expect(btnFire).toHaveTextContent('Fire');
  });
  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All ', () => {
    renderWithRouter(<App />);
    const btnTypes = screen.getAllByTestId('pokemon-type-button');
    btnTypes.forEach((btnType) => {
      expect(btnType).toBeInTheDocument();
    });
  });
  test('Testa se é possivel clicar no botão all', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: 'All' });
    fireEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();
  });
});
