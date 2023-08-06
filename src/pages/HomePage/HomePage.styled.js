import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 60px 0;
  }
`;
