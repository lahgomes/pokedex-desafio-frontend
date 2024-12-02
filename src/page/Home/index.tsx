import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonList from '../../components/PokemonList';
import ServiceProvider from '../../provider/ServiceProvider';

export default function Home() {
  return (
    <ServiceProvider>
      <Heading>Encontre seu Pokémon</Heading>
      <Filter />
      <PokemonList />
    </ServiceProvider>
  );
}
