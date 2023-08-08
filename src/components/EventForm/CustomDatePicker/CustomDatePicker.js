import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const CustomDatePicker = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        required
        modifiersClassNames={{
          selected: 'my-selected',
          today: 'my-today',
        }}
      />
    </>
  );
};

export default CustomDatePicker;
