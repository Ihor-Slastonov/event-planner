import Container from '../../components/Container/Container';
import EventForm from '../../components/EventForm/EventForm';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { PageTitle, Section } from './CreateEventPage.styled';

const CreateEventPage = () => {
  return (
    <Section>
      <Container>
        <GoBackButton />
        <PageTitle>Create new event</PageTitle>
        <EventForm />
      </Container>
    </Section>
  );
};

export default CreateEventPage;
