import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 40px 0 80px;
`;

export const PageTitle = styled.h2`
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.medium.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1;

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.medium.m};
  }
`;
