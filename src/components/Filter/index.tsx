import * as S from './styles';
import { POKEMON_TYPES } from '../../utils';
import { useService } from '../../provider/ServiceProvider';

export default function Filter() {
  const { onFilterPokemonByType } = useService();

  return (
    <S.FilterContainer>
      <S.FilterSelect onChange={onFilterPokemonByType}>
        <option value="">Filtrar por tipo</option>
        {POKEMON_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </S.FilterSelect>
    </S.FilterContainer>
  );
}
