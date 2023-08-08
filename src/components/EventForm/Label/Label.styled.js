import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  color: ${({ disabled }) => (!disabled ? '#7b61ff' : '#ACA7C3')};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  line-height: 1;
  letter-spacing: 0.4px;
`;
