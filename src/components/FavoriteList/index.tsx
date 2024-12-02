import { useEffect, useState } from 'react';
import * as S from './styles';
import Grid from '../Grid';
import PokemonCard from '../PokemonCard';

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

export default function FavoriteList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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

          setPokemons(detailedPokemons);
        } catch (error) {
          console.error('Erro ao buscar os Pokémons:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPokemons();
    }
  }, []);

  if (pokemons.length === 0) {
    return <S.Message>Nenhum pokémon favorito encontrado</S.Message>;
  }

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  return (
    <Grid>
      {pokemons.map((pokemon) => {
        const pokemonType = pokemon.types[0].type.name;

        return (
          <PokemonCard
            key={pokemon.id}
            pokemonType={pokemonType}
            pokemon={pokemon}
          />
        );
      })}
    </Grid>
  );
}
