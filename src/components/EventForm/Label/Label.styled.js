import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  color: ${({ disabled }) => (!disabled ? '#7b61ff' : '#ACA7C3')};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;
