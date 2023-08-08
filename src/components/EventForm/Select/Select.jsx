import { useState } from 'react';
import {
  SelectWrapper,
  SelectButton,
  OptionList,
  Option,
} from './Select.styled';
import { FiChevronDown } from 'react-icons/fi';
import { Label } from '../Label/Label';

const Select = ({ options, label = '...', onChange }) => {
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => setIsOpen(prev => !prev);
  const onOptionClick = option => {
    setValue(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <>
      <SelectWrapper>
        <Label>{label}</Label>
        <SelectButton
          type="button"
          data-open={isOpen}
          data-value={value}
          onClick={onButtonClick}
        >
          {value ? value.label : `Select ${label}`}
          <FiChevronDown size={24} color="#7B61FF" />
        </SelectButton>

        <OptionList data-open={isOpen}>
          {options?.map((option, index) => (
            <Option key={index} onClick={() => onOptionClick(option)}>
              {option.label}
            </Option>
          ))}
        </OptionList>
      </SelectWrapper>
    </>
  );
};

export default Select;
