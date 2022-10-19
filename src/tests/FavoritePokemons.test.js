import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';
import App from '../App';

describe('Teste o Componente FavoritePokemons.js', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const favoriteNotFund = screen.getByText('No favorite pokemon found');
    expect(favoriteNotFund).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    const pokemon = {
      name: 'Pikachu',
    };
    const { getByText } = renderWithRouter(<App />);
    const moreDetails = screen.getByText('More details');
    fireEvent.click(moreDetails);
    const pokeFavorite = screen.getByLabelText('Pokémon favoritado?');
    fireEvent.click(pokeFavorite);
    fireEvent.click(getByText('Favorite Pokémons'));
    expect(screen.getByTestId('pokemon-name').textContent).toBe(pokemon.name);
  });
});
