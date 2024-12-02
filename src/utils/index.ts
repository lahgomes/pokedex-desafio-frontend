export const COLORS: Record<string, string> = {
  bug: '#8bd674',
  dark: '#705746',
  dragon: '#e16776',
  electric: '#f2cb55',
  fairy: '#eba8c3',
  fighting: '#eb4971',
  fire: '#ffa756',
  flying: '#748fc9',
  ghost: '#8571be',
  grass: '#8bbe8a',
  ground: '#f78551',
  ice: '#61cec0',
  normal: '#b9b8d3',
  poison: '#9f6e97',
  psychic: '#a552cc',
  rock: '#d4c294',
  steel: '#b7b7ce',
  water: '#58abf6',
};

export const POKEMON_TYPES = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
];

const POKEMON_AVATAR_REPO_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
export const getPokemonAvatar = (id: number) =>
  `${POKEMON_AVATAR_REPO_URL}/${id}.png`;
