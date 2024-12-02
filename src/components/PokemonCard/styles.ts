import styled from 'styled-components';

interface CardProps {
  bgcolor: string;
}

export const Card = styled.div<CardProps>`
  grid-column: span 2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: ${({ bgcolor }) => bgcolor};
  position: relative;
  transition: all 0.3s ease;
  height: 160px;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const PokemonName = styled.h3`
  cursor: pointer;
  color: #ffff;
  font-size: 24px;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -30px;
  right: 10px;
`;
