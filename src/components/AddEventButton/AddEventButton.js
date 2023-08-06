import { StyledButton, StyledTextButton } from './AddEventButton.styled';
import { BsPlusLg } from 'react-icons/bs';

const AddEventButton = () => {
  return (
    <StyledButton to="/create-event">
      <BsPlusLg size={24} color="#FFFFFF" />
      <StyledTextButton>Add new event</StyledTextButton>
    </StyledButton>
  );
};

export default AddEventButton;
