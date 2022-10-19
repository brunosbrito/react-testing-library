import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon.js', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const name = screen.getByText('Pikachu');
    const type = screen.getByTestId('pokemon-type');
    const averageWeight = screen.getByText('Average weight: 6.0 kg');
    const image = screen.getByAltText('Pikachu sprite');

    expect(type.textContent).toBe('Electric');
    expect(name).toBeInTheDocument();
    expect(averageWeight).toBeInTheDocument();
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon', () => {
    renderWithRouter(<App />);
    const btnMoreDetails = screen.getByRole('link', { name: 'More details' });
    fireEvent.click(btnMoreDetails);
  });
  test('testa o pokemon favoritado', () => {
    renderWithRouter(<App />);
    const btnMoreDetails = screen.getByRole('link', { name: 'More details' });
    fireEvent.click(btnMoreDetails);
    const favoritePokemon = screen.getByText('Pokémon favoritado?');
    fireEvent.click(favoritePokemon);
    const image = screen.getAllByRole('img')[1];
    expect(image.src).toBe('http://localhost/star-icon.svg');
    expect(image.alt).toBe('Pikachu is marked as favorite');
  });
});
