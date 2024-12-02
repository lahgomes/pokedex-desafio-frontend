import React from 'react';
import * as S from './styles';

export default function Heading({ children }: { children: React.ReactNode }) {
  return <S.Heading>{children}</S.Heading>;
}
