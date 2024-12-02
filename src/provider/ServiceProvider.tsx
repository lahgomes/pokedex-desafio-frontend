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
  loading: boolean;
  favoriteIds: number[];
  onFavoritePokemon: (id: number) => void;
}

export const ServiceContext = createContext<ServiceContextProps>({
  pokemons: [],
  favoritePokemons: [],
  loading: true,
  favoriteIds: [],
  onFavoritePokemon: () => {},
});

ServiceContext.displayName = 'ServiceContext';

const useService = () => useContext(ServiceContext);

const ServiceProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
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

  return (
    <ServiceContext.Provider
      value={{
        pokemons,
        favoritePokemons,
        loading,
        favoriteIds,
        onFavoritePokemon,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;

export { useService };
