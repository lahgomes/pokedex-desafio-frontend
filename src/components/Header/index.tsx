import { Link } from 'react-router-dom';
import * as S from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <Link to="/">
          <img
            src="/public/logo.svg"
            alt="Home pokedex"
            width="80"
            height="60"
          />
        </Link>
        Barra de Busca
        <Link to="/favoritos">
          Meus Favoritos
          <MdFavoriteBorder />
        </Link>
      </S.Nav>
    </S.HeaderContainer>
  );
}
