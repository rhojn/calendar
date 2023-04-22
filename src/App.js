import { useState } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/header';
import './App.scss';
import Main from './components/main';

const TEST_DATA = [
  {
    id: '3',
    title: 'Company Pre Retreat',
    description: 'Annual team building pre event at the beach',
    start: '2023-04-24T08:00:00+08:00',
    end: '2023-04-24T17:00:00+08:00',
    location: 'Boracay Island, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'email',
        minutes: 1440,
      },
    ],
    attendees: [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
    ],
    color: '#ffd600',
  },
  {
    id: '4',
    title: 'Company Retreat',
    description: 'Annual team building event at the beach',
    start: '2023-04-25T09:00:00+08:00',
    end: '2023-04-27T17:00:00+08:00',
    location: 'Boracay Island, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'email',
        minutes: 1440,
      },
    ],
    attendees: [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
    ],
    color: '#ffd600',
  },
  {
    id: '5',
    title: "Doctor's Appointment",
    description: 'Follow-up checkup with Dr. Reyes',
    start: '2023-04-26T11:00:00+08:00',
    end: '2023-04-26T12:00:00+08:00',
    location: "St. Luke's Medical Center, Quezon City, Philippines",
    reminders: [
      {
        method: 'popup',
        minutes: 30,
      },
      {
        method: 'email',
        minutes: 120,
      },
    ],
    attendees: [
      {
        name: 'Dr. Reyes',
        email: 'dr.reyes@example.com',
      },
    ],
    color: '#4caf50',
  },
  {
    id: '6',
    title: 'School Play',
    description: 'Watch kids perform in their school play',
    start: '2023-04-27T14:00:00+08:00',
    end: '2023-04-27T16:00:00+08:00',
    location: 'Ateneo de Manila High School, Quezon City, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'email',
        minutes: 240,
      },
    ],
    attendees: [
      {
        name: 'John Lee',
        email: 'john.lee@example.com',
      },
      {
        name: 'Maria Cruz',
        email: 'maria.cruz@example.com',
      },
    ],
    color: '#9c27b0',
  },
  {
    id: '8',
    title: 'Birthday Party',
    description: "Celebrating John's 30th birthday",
    start: '2023-04-29T19:00:00+08:00',
    end: '2023-04-29T23:00:00+08:00',
    location: 'Makati City, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'email',
        minutes: 1440,
      },
    ],
    attendees: [
      {
        name: 'John',
        email: 'john@example.com',
      },
      {
        name: 'Jane',
        email: 'jane@example.com',
      },
    ],
    color: '#e91e63',
  },
  {
    id: '9',
    title: 'Travel',
    description: 'Vacation in Palawan Island',
    start: '2023-04-30T09:00:00+08:00',
    end: '2023-05-05T17:00:00+08:00',
    location: 'Palawan Island, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 1440,
      },
      {
        method: 'email',
        minutes: 2880,
      },
    ],
    attendees: [
      {
        name: 'John Lee',
        email: 'john.lee@example.com',
      },
      {
        name: 'Maria Cruz',
        email: 'maria.cruz@example.com',
      },
    ],
    color: '#3f51b5',
  },
  {
    id: '10',
    title: 'Family Reunion',
    description: 'Annual gathering of the Smith family',
    start: '2023-04-30T14:00:00+08:00',
    end: '2023-04-30T18:00:00+08:00',
    location: 'Pasig City, Philippines',
    reminders: [
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'email',
        minutes: 1440,
      },
    ],
    attendees: [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
    ],
    color: '#ff5722',
  },
];
function App() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [events, setEvents] = useState(TEST_DATA);

  const handleAddEvent = (event) => {
    const newId = nanoid();
    setEvents([...events, { ...event, id: newId }]);
  };

  const handleOnSelect = (date) => {
    console.log('SELECT', date)
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((i) => i.id !== eventId));
  };

  return (
    <div className='App'>
      <Header />
      <Main
        selectedDate={selectedDate}
        onSelect={handleOnSelect}
        events={events}
        addEvent={handleAddEvent}
        deleteEvent={handleDeleteEvent}
      />
    </div>
  );
}

export default App;
