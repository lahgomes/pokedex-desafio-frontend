import { useService } from '../../provider/ServiceProvider';
import Grid from '../Grid';
import PokemonCard from '../PokemonCard';
import Skeleton from '../Skeleton';
import styled from 'styled-components';

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 24px;
`;

export default function FavoriteList() {
  const { favoritePokemons, loading } = useService();

  if (favoritePokemons.length === 0) {
    return <Message>Nenhum pokémon favorito encontrado</Message>;
  }

  if (loading) {
    return (
      <Grid>
        <Skeleton />
      </Grid>
    );
  }

  return (
    <Grid>
      {favoritePokemons.map((pokemon) => {
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
