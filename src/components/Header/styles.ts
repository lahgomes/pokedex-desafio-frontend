import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 10px;
  height: 80px;
  width: 100%;
  background-color: #f6f6f6;
  border-radius: 16px;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0px 5px 39px -9px rgba(0, 0, 0, 0.35);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  color: #919191;
  font-weight: bold;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
