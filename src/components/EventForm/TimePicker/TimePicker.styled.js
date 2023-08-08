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


  border-radius: 8px;
  border: ${({ 'data-text': text, 'data-invalid': invalid }) =>
    !text
      ? '1px solid #aca7c3 '
      : !invalid
      ? '1px solid #7b61ff'
      : '1px solid #FF2B77'};

  outline: transparent;
`;
