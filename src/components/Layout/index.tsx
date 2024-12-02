import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
