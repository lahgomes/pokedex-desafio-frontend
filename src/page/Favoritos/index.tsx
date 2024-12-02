import { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import FavoriteList from '../../components/FavoriteList';
import { Pokemon } from '../../types';

export default function Favoritos() {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <>
      <Heading>Meus Favoritos</Heading>
      <FavoriteList favoritePokemons={favoritePokemons} loading={loading} />
    </>
  );
}
