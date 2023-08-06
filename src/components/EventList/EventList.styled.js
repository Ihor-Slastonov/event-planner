import { styled } from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
