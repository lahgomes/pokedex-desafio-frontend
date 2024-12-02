import { POKEMON_TYPES } from '../../utils';
import { useService } from '../../provider/ServiceProvider';
import * as S from './styles';
import Grid from '../Grid';

export default function Filter() {
  const { onFilterPokemonByType } = useService();

  return (
    <Grid>
      <S.FilterSelect onChange={onFilterPokemonByType}>
        <option value="all">Filtrar por tipo</option>
        {POKEMON_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </S.FilterSelect>
    </Grid>
  );
}
