import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import SharedLayout from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CreateEventPage = lazy(() =>
  import('../../pages/CreateEventPage/CreateEventPage')
);
const EventPage = lazy(() => import('../../pages/EventPage/EventPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="create-event" element={<CreateEventPage />} />
          <Route path="event/:eventId" element={<EventPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
