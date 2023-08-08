import { useState } from 'react';

import { toast } from 'react-hot-toast';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { FiChevronDown } from 'react-icons/fi';

import dayPickerFormatDate from '../../utils/dayPickerFormatDate';
import { Label } from '../Label/Label';

import css from './CustomDatePicker.module.css';

import {
  DayPickerWrapper,
  DayPickerButton,
  DropDown,
  ActionsWrapper,
  ConfirmButton,
  CancelButton,
} from './CustomDatePicker.styled';

const CustomDatePicker = ({ name, label, value, onChange }) => {
  const [selectedDay, setSelectedDay] = useState(value ? value : null);
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => setIsOpen(prev => !prev);

  const onSelectedDay = date => {
    const formatedDate = dayPickerFormatDate(date);
    setSelectedDay(formatedDate);
  };

  const onConfirmButtonClick = () => {
    if (selectedDay === null || selectedDay === '')
      return toast.error('Select a day');
    setIsOpen(false);
    onChange(selectedDay);
  };

  const onCancelButtonClick = () => {
    setSelectedDay(null);
    setIsOpen(false);
  };

  const styles = {
    table: css.table,
    caption: css.caption,
    nav: css.nav,
    nav_button: css.navButton,
    head_cell: css.week,
    row: css.row,
    cell: css.cell,
    day: css.day,
    day_today: css.today,
    day_selected: css.selected,
  };

  const formatWeekdayName = day => format(day, 'EEE');

  return (
    <>
      <DayPickerWrapper>
        <Label inputId={name}>{label}</Label>

        <DayPickerButton
          type="button"
          data-open={isOpen}
          data-selected={selectedDay !== null}
          onClick={onButtonClick}
        >
          {selectedDay ? selectedDay : 'Select Date'}
          <FiChevronDown size={24} color="#7B61FF" />
        </DayPickerButton>

        <DropDown data-open={isOpen}>
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={onSelectedDay}
            required
            classNames={styles}
            formatters={{ formatWeekdayName }}
          />

          <ActionsWrapper>
            <CancelButton type="button" onClick={onCancelButtonClick}>
              Cancel
            </CancelButton>
            <ConfirmButton type="button" onClick={onConfirmButtonClick}>
              Choose date
            </ConfirmButton>
          </ActionsWrapper>
        </DropDown>
      </DayPickerWrapper>
    </>
  );
};

export default CustomDatePicker;
