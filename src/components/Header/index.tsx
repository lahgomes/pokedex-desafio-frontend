import { Link } from 'react-router-dom';
import Search from '../Search';
import { MdFavoriteBorder } from 'react-icons/md';
import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <Link to="/">
          <img src="/logo.svg" alt="Home pokedex" width="80" height="60" />
        </Link>
        <Search />
        <Link to="/favoritos">
          Meus Favoritos
          <MdFavoriteBorder />
        </Link>
      </S.Nav>
    </S.HeaderContainer>
  );
}
