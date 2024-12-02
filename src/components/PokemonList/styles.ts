import styled from 'styled-components';

interface CardProps {
  bgcolor: string;
}

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  color: #919191;
  margin-bottom: 16px;
  text-align: center;
`;

export const Layout = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 48px;
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
  font-size: 24px;
`;
