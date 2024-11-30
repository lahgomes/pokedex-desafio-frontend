import { useEffect, useState } from 'react';
import * as S from './styles';

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

const COLORS: Record<string, string> = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

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
    <S.List>
      {pokemons.map((pokemon) => {
        const pokemonType = pokemon.types[0].type.name;

        return (
          <S.Card key={pokemon.id} bgColor={COLORS[pokemonType]}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </S.Card>
        );
      })}
    </S.List>
  );
}
