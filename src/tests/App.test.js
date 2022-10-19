import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente App.js', () => {
  test('Testa se tem os link home, about, e favorite pokemons', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/home/i);
    const about = screen.getByText(/about/i);
    const favorite = screen.getByText(/favorite/i);

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });
  test('testa se vai para pagina about se clicar em Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByText('Home');
    userEvent.click(home);
    const titleHome = screen.getByRole('heading', { level: 2 });
    expect(titleHome).toHaveTextContent('Encountered pokémons');
  });
  test('testa se vai para pagina about se clicar em About', () => {
    renderWithRouter(<App />);
    const about = screen.getByText('About');
    userEvent.click(about);
    const titleAbout = screen.getByRole('heading', { level: 2 });
    expect(titleAbout).toHaveTextContent('About Pokédex');
  });
  test('testa se vai para pagina about se clicar em Home', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByText('Favorite Pokémons');
    userEvent.click(favorite);
    const titleFavorite = screen.getByRole('heading', { level: 2 });
    expect(titleFavorite).toHaveTextContent('Favorite pokémons');
  });
});
