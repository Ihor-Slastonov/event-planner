import { styled } from 'styled-components';

export const Logo = styled.a`
  margin-right: 56px;

  font-family: ${({ theme }) => theme.fonts.Alata};
  font-size: ${({ theme }) => theme.fontSize.medium.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: normal;
  color: ${({ theme }) => theme.colors.logo};

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-right: 80px;
  }
  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    margin-right: 623px;
  }
`;
