import { RxCross2 } from 'react-icons/rx';

import { Label } from '../Label/Label';
import checkInputValidation from '../../utils/checkInputValidation';

import {
  InputWrapper,
  Input,
  ClearButton,
  InvalidInfoText,
  TextAria,
  Wrapper,
} from './TextInput.styled';
const TextInput = ({
  label,
  name,
  value,
  callBack,
  onChange,
  textArea = false,
  disabled = false,
}) => {
  return (
    <Wrapper>
      <Label inputId={name} disabled={disabled}>
        {label}
      </Label>
      <InputWrapper>
        {!textArea ? (
          <Input
            disabled={disabled}
            type="text"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            pattern="^(?!\.)[a-zA-Z0-9.]+.*$"
            data-text={value !== ''}
            data-invalid={checkInputValidation(value)}
            minLength={3}
            maxLength={40}
            required
          />
        ) : (
          <TextAria
            name={name}
            id={name}
            rows={8}
            value={value}
            onChange={onChange}
            minLength={6}
            maxLength={400}
            data-text={value !== ''}
            data-invalid={checkInputValidation(value)}
            pattern="^(?!\.)[a-zA-Z0-9.]+.*$"
            required
          />
        )}
        <ClearButton
          type="button"
          onClick={() => callBack('')}
          data-text={value !== ''}
          data-invalid={checkInputValidation(value)}
          $top={textArea}
          disabled={disabled}
        >
          <RxCross2 size={24} />
        </ClearButton>
        <InvalidInfoText
          data-invalid={checkInputValidation(value)}
          data-text={value !== ''}
        >
          Invalid input
        </InvalidInfoText>
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
