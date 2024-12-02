import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

/* export const List = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 1440px;
  margin: 0 auto;
  gap: 24px;
  padding: 24px 0;
`; */

/* export const Card = styled.div<CardProps>`
  grid-column: span 2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  position: relative;
`; */

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 24px;
`;
