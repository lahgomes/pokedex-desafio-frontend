import { useEffect, useState } from 'react';
import Grid from '../Grid';
import PokemonCard from '../PokemonCard';
import FavoriteButton from '../FavoriteButton';

import * as S from './styles';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  return (
    <S.Layout>
      <S.Title>Encontre todos os pokémons por aqui</S.Title>
      <Grid>
        {pokemons.map((pokemon) => {
          const pokemonType = pokemon.types[0].type.name;

          return (
            <PokemonCard
              key={pokemon.id}
              pokemonType={pokemonType}
              pokemon={pokemon}
            >
              <S.Container>
                <FavoriteButton
                  favoriteIds={favoriteIds}
                  onFavoritePokemon={onFavoritePokemon}
                  pokemonId={pokemon.id}
                />
                <S.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </S.Container>
            </PokemonCard>
          );
        })}
      </Grid>
    </S.Layout>
  );
}
