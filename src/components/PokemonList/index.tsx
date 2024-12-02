import { useService } from '../../provider/ServiceProvider';
import FavoriteButton from '../FavoriteButton';
import Grid from '../Grid';
import PokemonCard from '../PokemonCard';
import Skeleton from '../Skeleton';

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
    if (filteredPokemons.length > 0) {
      return (
        <Grid>
          {filteredPokemons.map((pokemon) => {
            const pokemonType = pokemon.types[0].type.name;

            return (
              <PokemonCard
                key={pokemon.id}
                pokemonType={pokemonType}
                pokemon={pokemon}
              >
                <FavoriteButton
                  favoriteIds={favoriteIds}
                  onFavoritePokemon={onFavoritePokemon}
                  pokemonId={pokemon.id}
                />
              </PokemonCard>
            );
          })}
        </Grid>
      );
    }

    return (
      <Grid>
        <h1>Nenhum pokémon encontrado :(</h1>
      </Grid>
    );
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
          >
            <FavoriteButton
              favoriteIds={favoriteIds}
              onFavoritePokemon={onFavoritePokemon}
              pokemonId={pokemon.id}
            />
          </PokemonCard>
        );
      })}
    </Grid>
  );
}
