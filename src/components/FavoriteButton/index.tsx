import { MdFavoriteBorder } from 'react-icons/md';
import * as S from './styles';

interface FavoriteButtonProps {
  onFavoritePokemon: (id: number) => void;
  favoriteIds: number[];
  pokemonId: number;
}

export default function FavoriteButton({
  onFavoritePokemon,
  favoriteIds,
  pokemonId,
}: FavoriteButtonProps) {
  return (
    <S.FavoriteButton
      title="Salvar como favorito"
      onClick={(e) => {
        e.stopPropagation();
        onFavoritePokemon(pokemonId);
      }}
      isfavorite={favoriteIds.includes(pokemonId)}
    >
      <MdFavoriteBorder />
    </S.FavoriteButton>
  );
}
