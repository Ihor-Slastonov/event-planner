import { styled } from 'styled-components';

export const TimeWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 308px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 372px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 12px;
  margin-top: 8px;
  height: 56px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  border-radius: 8px;
  border: 1px solid #aca7c3;

  outline: transparent;

  ${({ value }) => value !== '' && `border: 1px solid #7b61ff;`}
`;
