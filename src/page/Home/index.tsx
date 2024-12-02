import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonList from '../../components/PokemonList';

export default function Home() {
  return (
    <>
      <Heading>Encontre seu Pokémon</Heading>
      <Filter />
      <PokemonList />
    </>
  );
}
