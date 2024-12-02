import styled from 'styled-components';

interface CardProps {
  bgcolor: string;
}

export const Card = styled.div<CardProps>`
  flex: 1 1 calc(100% - 32px);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: ${({ bgcolor }) => bgcolor};
  position: relative;
  transition: all 0.3s ease;
  height: 140px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    max-width: 320px;
    flex: 1 1 calc(33.33% - 32px);
  }
`;

export const PokemonName = styled.h3`
  cursor: pointer;
  color: #ffff;
  font-size: 24px;
  font-weight: 300;
  text-transform: capitalize;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -30px;
  right: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
