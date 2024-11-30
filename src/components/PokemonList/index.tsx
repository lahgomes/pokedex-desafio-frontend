import { useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
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

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // esse endpoint não traz as informações detalhadas dos pokémons
        // por isso é necessário um segundo fetch para cada pokémon
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=150'
        );
        const data = await response.json();

        // para cada pokémon, faz um fetch para buscar as informações detalhadas
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
    // Busca os favoritos salvos no localStorage
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

    // Salva os favoritos atualizados no localStorage
    localStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));

    setFavoriteIds(updatedFavorites);
  };

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  return (
    <S.List>
      {pokemons.map((pokemon) => {
        const pokemonType = pokemon.types[0].type.name;

        return (
          <S.Card key={pokemon.id} bgcolor={COLORS[pokemonType]}>
            <S.FavoriteButton
              title="Salvar como favorito"
              onClick={() => onFavoritePokemon(pokemon.id)}
              isfavorite={favoriteIds.includes(pokemon.id)}
            >
              <MdFavoriteBorder />
            </S.FavoriteButton>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </S.Card>
        );
      })}
    </S.List>
  );
}
