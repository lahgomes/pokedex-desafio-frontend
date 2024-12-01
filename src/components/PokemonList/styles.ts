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
  grid-template-columns: repeat(3, 1fr);
  max-width: 1024px;
  margin: 0 auto;
  gap: 40px 15px;
  padding: 24px 0;
`;

export const Card = styled.div<CardProps>`
  grid-column: span 1;
  border-radius: 12px;
  min-height: 110px;
  position: relative;
  padding: 12px;
  text-align: left;
  background-color: ${({ bgcolor }) => bgcolor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -30px;
  right: 10px;
`;

export const Name = styled.h2`
  color: #ffff;
  font-size: 2rem;
`;

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    font-size: 24px;
    color: ${({ isfavorite }) => (isfavorite ? '#ff0000' : '#ffff')};

    &:hover {
      color: red;
    }
  }
`;
