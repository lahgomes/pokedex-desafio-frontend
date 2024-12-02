import { Outlet } from 'react-router-dom';
import Header from '../Header';
import * as S from './styles';

export default function Layout() {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
}
