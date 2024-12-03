import { render, screen } from '@testing-library/react';
import PokemonList from '.';
import { useService } from '../../provider/ServiceProvider';

jest.mock('../../provider/ServiceProvider', () => ({
  useService: jest.fn(),
}));

describe('PokemonList', () => {
  const mockOnFavoritePokemon = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should display loading skeleton when data is being loaded', () => {
    (useService as jest.Mock).mockReturnValue({
      pokemons: [],
      filteredPokemons: null,
      loading: true,
      favoriteIds: [],
      term: '',
      onFavoritePokemon: mockOnFavoritePokemon,
      onChangeTerm: jest.fn(),
      onSearchFilterPokemon: jest.fn(),
      onFilterPokemonByType: jest.fn(),
    });

    render(<PokemonList />);

    const skeletons = screen.getAllByTestId('skeleton');

    expect(skeletons.length).toBeGreaterThan(0);

    skeletons.forEach((skeleton) => {
      expect(skeleton).toBeInTheDocument();
    });
  });

  test('should display filtered Pokémon when available', () => {
    (useService as jest.Mock).mockReturnValue({
      pokemons: [],
      filteredPokemons: [
        { id: 1, name: 'Bulbasaur', types: [{ type: { name: 'grass' } }] },
        { id: 2, name: 'Charmander', types: [{ type: { name: 'fire' } }] },
      ],
      loading: false,
      favoriteIds: [],
      term: '',
      onFavoritePokemon: mockOnFavoritePokemon,
      onChangeTerm: jest.fn(),
      onSearchFilterPokemon: jest.fn(),
      onFilterPokemonByType: jest.fn(),
    });

    render(<PokemonList />);

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });

  test('should display "No Pokémon found" message when filteredPokemons is empty', () => {
    (useService as jest.Mock).mockReturnValue({
      pokemons: [],
      filteredPokemons: [],
      loading: false,
      favoriteIds: [],
      term: '',
      onFavoritePokemon: mockOnFavoritePokemon,
      onChangeTerm: jest.fn(),
      onSearchFilterPokemon: jest.fn(),
      onFilterPokemonByType: jest.fn(),
    });

    render(<PokemonList />);

    expect(
      screen.getByText('Nenhum pokémon encontrado :(')
    ).toBeInTheDocument();
  });

  test('should display all Pokémon when filteredPokemons is null', () => {
    (useService as jest.Mock).mockReturnValue({
      pokemons: [
        { id: 1, name: 'Bulbasaur', types: [{ type: { name: 'grass' } }] },
        { id: 2, name: 'Charmander', types: [{ type: { name: 'fire' } }] },
      ],
      filteredPokemons: null,
      loading: false,
      favoriteIds: [],
      term: '',
      onFavoritePokemon: mockOnFavoritePokemon,
      onChangeTerm: jest.fn(),
      onSearchFilterPokemon: jest.fn(),
      onFilterPokemonByType: jest.fn(),
    });

    render(<PokemonList />);

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });
});
