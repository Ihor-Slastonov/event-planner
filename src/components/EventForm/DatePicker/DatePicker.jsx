import { Label } from '../Label/Label';
import { Input, DateWrapper } from './DatePicker.styled';

const DatePicker = ({ label, name = '', value, onChange }) => {
  return (
    <DateWrapper>
      <Label inputId={name}>{label}</Label>
      <Input
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </DateWrapper>
  );
};

export default DatePicker;
