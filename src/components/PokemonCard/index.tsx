import { COLORS } from '../../utils';
import { useModal } from '../../provider/ModalProvider';
import * as S from './styles';

interface PokemonCardProps {
  pokemonType: string;
  pokemon: {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
  };
  children?: React.ReactNode;
}

export default function PokemonCard({
  pokemonType,
  pokemon,
  children,
}: PokemonCardProps) {
  const { onOpenModal } = useModal();

  return (
    <S.Card bgcolor={COLORS[pokemonType]}>
      {children}
      <S.PokemonName onClick={() => onOpenModal(pokemon)}>
        {pokemon.name}
      </S.PokemonName>
    </S.Card>
  );
}
