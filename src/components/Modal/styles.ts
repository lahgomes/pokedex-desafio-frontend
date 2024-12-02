import styled from 'styled-components';

export const ModalRoot = styled.dialog`
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  padding: 24px 16px;
  z-index: 10;
  border: none;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 720px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 16px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      height: 24px;
      width: 24px;
      color: #555;
    }

    &:hover {
      color: #333;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const PokemonImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  border-radius: 8px;
  background: #f6f6f6;
  padding: 8px;
`;

export const PokemonName = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  text-align: center;
`;

export const PokemonID = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #888;
`;

export const TypeBadge = styled.li<{ typeColor: string }>`
  font-size: 0.875rem;
  color: #fff;
  background-color: ${(props) => props.typeColor};
  border-radius: 12px;
  padding: 6px 12px;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    background: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;

    h3 {
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      color: #333;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      li {
        font-size: 0.875rem;
        color: #444;
        background: #f0f0f0;
        border-radius: 4px;
        padding: 6px 10px;
      }
    }
  }
`;
