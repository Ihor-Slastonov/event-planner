import { Label } from '../Label/Label';
import { Input, TimeWrapper } from './TimePicker.styled';

const TimePicker = ({ label, name = '', value, onChange }) => {
  return (
    <>
      <TimeWrapper>
        <Label inputId={name}>{label}</Label>
        <Input
          type="time"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required
        />
      </TimeWrapper>
    </>
  );
};

export default TimePicker;
