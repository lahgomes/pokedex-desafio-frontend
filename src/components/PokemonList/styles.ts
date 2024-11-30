import styled from 'styled-components';

interface CardProps {
  bgcolor: string;
}

interface FavoriteButtonProps {
  isfavorite?: boolean;
}

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const List = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 1440px;
  margin: 0 auto;
  gap: 24px;
  padding: 24px 0;
`;

export const Card = styled.div<CardProps>`
  grid-column: span 2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: ${({ bgcolor }) => bgcolor};
  position: relative;
`;

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  & > svg {
    font-size: 24px;
    color: ${({ isfavorite }) => (isfavorite ? 'red' : 'black')};

    &:hover {
      color: red;
    }
  }
`;
