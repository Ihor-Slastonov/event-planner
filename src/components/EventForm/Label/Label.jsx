import { StyledLabel } from './Label.styled';

export const Label = ({ children, inputId = '', disabled = false }) => {
  return (
    <StyledLabel htmlFor={inputId} disabled={disabled}>
      {children}
    </StyledLabel>
  );
};
