import { useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import * as S from './styles';

interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      official_artwork: {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
}

const COLORS: Record<string, string> = {
  fire: '#ffa756',
  grass: '#8bbe8a',
  electric: '#f2cb55',
  water: '#58abf6',
  ground: '#f78551',
  rock: '#d4c294',
  fairy: '#eba8c3',
  poison: '#9f6e97',
  bug: '#8bd674',
  dragon: '#e16776',
  psychic: '#a552cc',
  flying: '#748fc9',
  fighting: '#eb4971',
  normal: '#b9b8d3',
  ghost: '#8571be',
  ice: '#61cec0',
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
        console.log('🚀 ~ {pokemons.map ~ pokemon:', pokemon);
        const pokemonType = pokemon.types[0].type.name;

        return (
          <S.Card key={pokemon.id} bgcolor={COLORS[pokemonType]}>
            <S.Container>
              <S.FavoriteButton
                title="Salvar como favorito"
                onClick={() => onFavoritePokemon(pokemon.id)}
                isfavorite={favoriteIds.includes(pokemon.id)}
              >
                <MdFavoriteBorder />
              </S.FavoriteButton>
              <S.Name>{pokemon.name}</S.Name>
            </S.Container>
            <S.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </S.Card>
        );
      })}
    </S.List>
  );
}
