// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import React, {Fragment} from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EventsPage from './components/EventsPage'
import EventDetailPage from './components/EventDetailPage'
import NewEventPage from './components/NewEventPage'
import EditEventPage from './components/EditEventPage'
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/events/:id" element={<EventDetailPage />}></Route>
        <Route path="/events/new" element={<NewEventPage />}></Route>
        <Route path="/events/:id/edit" element={<EditEventPage />}></Route>

      </Routes>
    </Fragment>
  );
}

export default App;
