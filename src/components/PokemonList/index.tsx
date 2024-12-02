import Grid from '../Grid';
import PokemonCard from '../PokemonCard';
import FavoriteButton from '../FavoriteButton';
import Skeleton from '../Skeleton';
import { useService } from '../../provider/ServiceProvider';

import * as S from './styles';

export default function PokemonList() {
  const {
    pokemons,
    filteredPokemons,
    loading,
    favoriteIds,
    onFavoritePokemon,
  } = useService();

  if (loading) {
    return (
      <Grid>
        <Skeleton />
      </Grid>
    );
  }

  if (filteredPokemons) {
    return (
      <Grid>
        <PokemonCard
          key={filteredPokemons.id}
          pokemonType={filteredPokemons.types[0].type.name}
          pokemon={filteredPokemons}
        >
          <FavoriteButton
            favoriteIds={favoriteIds}
            onFavoritePokemon={onFavoritePokemon}
            pokemonId={filteredPokemons.id}
          />
        </PokemonCard>
      </Grid>
    );
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
