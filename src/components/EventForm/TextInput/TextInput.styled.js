import { styled } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 308px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 372px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
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

  ${({ disabled }) =>
    disabled &&
    `border: 1px solid #aca7c3;
  cursor: not-allowed;
  `}
`;

export const ClearButton = styled.button`
  position: absolute;
  top: ${({ $top }) => (!$top ? '50%' : '12px')};
  right: 12px;
  transform: translateY(${({ $top }) => (!$top ? '-50%' : '0')});

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  background-color: transparent;
  color: ${({ 'data-text': text, 'data-invalid': invalid }) =>
    !text ? '#aca7c3' : !invalid ? '#7b61ff' : '#FF2B77'};

  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `color: #aca7c3; 
  cursor: not-allowed; `}
`;

export const InvalidInfoText = styled.p`
  position: absolute;
  bottom: -20px;
  right: 19px;

  transform: translateY(
    ${({ 'data-invalid': invalid }) => (invalid ? '0' : '-20px')}
  );
  opacity: ${({ 'data-invalid': invalid, 'data-text': text }) =>
    !text ? 0 : invalid ? 1 : 0};

  transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  color: #ff2b77;
  text-align: right;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;

export const TextAria = styled.textarea`
  width: 100%;
  height: 156px;

  padding: 16px 12px;
  margin-top: 8px;

  border: ${({ 'data-text': text, 'data-invalid': invalid }) =>
    !text
      ? '1px solid #aca7c3 '
      : !invalid
      ? '1px solid #7b61ff'
      : '1px solid #FF2B77'};
  border-radius: 8px;
  outline: transparent;
  resize: none;
`;