import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa o componente About', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const sectionAbout = screen.getByText('About Pokédex');
    expect(sectionAbout).toBeInTheDocument();
  });
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTile = screen.getByRole('heading', { level: 2 });
    expect(aboutTile).toHaveTextContent('About Pokédex');
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const aboutParagraph = screen.getAllByText(/Pokémons/i);
    expect(aboutParagraph.length).toBe(2);
  });
  test('Teste se a página contém uma imagem de pokedex', () => {
    renderWithRouter(<About />);
    const aboutImage = screen.getByRole('img');
    expect((aboutImage).src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
