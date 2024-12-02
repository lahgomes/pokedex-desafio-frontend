import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

interface ServiceContextProps {
  pokemons: Pokemon[];
  favoritePokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  loading: boolean;
  favoriteIds: number[];
  term: string;
  onFavoritePokemon: (id: number) => void;
  onChangeTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterPokemon: () => void;
  onFilterPokemonByType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ServiceContext = createContext<ServiceContextProps>({
  pokemons: [],
  favoritePokemons: [],
  filteredPokemons: [],
  loading: true,
  favoriteIds: [],
  term: '',
  onFavoritePokemon: () => {},
  onChangeTerm: () => {},
  onFilterPokemon: () => {},
  onFilterPokemonByType: () => {},
});

ServiceContext.displayName = 'ServiceContext';

const useService = () => useContext(ServiceContext);

const ServiceProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [term, searchTerm] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=150'
        );
        const data = await response.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error('Erro ao buscar os Pokémons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    const favoritePokemons = storedFavorites ? JSON.parse(storedFavorites) : [];
    if (favoritePokemons.length > 0) {
      const fetchPokemons = async () => {
        try {
          const detailedPokemons = await Promise.all(
            favoritePokemons.map(async (id: number) => {
              const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`
              );
              return response.json();
            })
          );
          setFavoritePokemons(detailedPokemons);
        } catch (error) {
          console.error('Erro ao buscar os Pokémons:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchPokemons();
    }
  }, []);

  useEffect(() => {
    if (!Boolean(term)) {
      setFilteredPokemons([]);
    }
  }, [term]);

  const onFavoritePokemon = (id: number) => {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    const favoritePokemons = storedFavorites ? JSON.parse(storedFavorites) : [];
    let updatedFavorites;
    if (favoritePokemons.includes(id)) {
      updatedFavorites = favoritePokemons.filter(
        (favId: number) => favId !== id
      );
    } else {
      updatedFavorites = [...favoritePokemons, id];
    }

    localStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));
    setFavoriteIds(updatedFavorites);
  };

  const onChangeTerm = (event: React.ChangeEvent<HTMLInputElement>) =>
    searchTerm(event.target.value);

  const onFilterPokemon = () => {
    const filteredPokemon = pokemons.filter(({ name }) => name === term);
    setFilteredPokemons(filteredPokemon);
  };

  const onFilterPokemonByType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filteredPokemon = pokemons.filter(({ types }) => {
      return types.some(({ type }) => type.name === event.target.value);
    });
    setFilteredPokemons(filteredPokemon);
  };

  return (
    <ServiceContext.Provider
      value={{
        pokemons,
        favoritePokemons,
        filteredPokemons,
        loading,
        favoriteIds,
        term,
        onFavoritePokemon,
        onChangeTerm,
        onFilterPokemon,
        onFilterPokemonByType,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;

export { useService };
