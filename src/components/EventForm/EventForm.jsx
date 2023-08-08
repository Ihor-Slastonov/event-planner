import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import eventsApi from '../../services/eventsApi';
import formatTime from '../utils/formatTime';

import TextInput from './TextInput/TextInput';
import Select from './Select/Select';
import categories from '../../data/categories';
import priorities from '../../data/priorities';
import TimePicker from './TimePicker/TimePicker';

import { Form, FormButton, FormWrapper } from './EventForm.styled';
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import CustomDatePicker from './CustomDatePicker/CustomDatePicker';

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onTitleChange = e => setTitle(e.currentTarget.value);
  const onDescriptionChange = e => setDescription(e.currentTarget.value);
  const onDateChange = value => setDate(value);
  const onTimeChange = e => setTime(e.currentTarget.value);
  const onLocationChange = e => setLocation(e.currentTarget.value);
  const onCategoryChange = value => setCategory(value);
  const onPriorityChange = value => setPriority(value);

  const cleanForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setCategory(null);
    setPriority(null);
  };

  const onSubmit = async event => {
    event.preventDefault();

    const fieldsToCheck = {
      title,
      description,
      date,
      time,
      location,
      category,
      priority,
    };
    for (const [key, value] of Object.entries(fieldsToCheck)) {
      if (value === null || value.trim() === '') {
        toast.error(`Fill in the field: ${key}`);
        return;
      }
    }

    const newEvent = {
      title: title.trim(),
      description: description.trim(),
      imageUrl: 'placeholder.png',
      category,
      priority,
      date,
      time: formatTime(time),
      location: location.trim(),
    };

    try {
      setIsLoading(true);
      await eventsApi.postNewEvent(newEvent);
    } catch (error) {
      toast.error('Please try again later');
    } finally {
      cleanForm();
      setIsLoading(false);
      toast.success('The event has been successfully created');
      navigate('/');
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <FormWrapper>
        <Form onSubmit={onSubmit} autoComplete="off">
          {/* Title */}

          <TextInput
            label="Title"
            name="title"
            value={title}
            callBack={setTitle}
            onChange={onTitleChange}
          />

          {/* About */}

          <TextInput
            label="Description"
            name="about"
            value={description}
            callBack={setDescription}
            onChange={onDescriptionChange}
            textArea
          />

          {/* Date */}
          <CustomDatePicker
            label="Select Date"
            name="date"
            value={date}
            onChange={onDateChange}
          />

          {/* Time */}

          <TimePicker
            label="Select time"
            name="time"
            value={time}
            onChange={onTimeChange}
          />

          {/* Location  */}

          <TextInput
            label="Location"
            name="location"
            value={location}
            callBack={setLocation}
            onChange={onLocationChange}
          />

          {/* Category */}

          <Select
            label="Category"
            options={categories}
            onChange={onCategoryChange}
          />

          {/* Add picture */}

          <TextInput label="Add picture" disabled />

          {/* Priority */}

          <Select
            label="Priority"
            options={priorities}
            onChange={onPriorityChange}
          />
        </Form>
        <FormButton type="submit" onClick={onSubmit}>
          Add event
        </FormButton>
      </FormWrapper>
    </>
  );
};

export default CreateEventForm;
