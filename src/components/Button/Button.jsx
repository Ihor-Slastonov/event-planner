import { StyledButton } from './Button.styled';

const Button = ({
  children,
  type = 'button',
  disabled = false,
  handleClick,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
