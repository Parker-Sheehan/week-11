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

import React, { Fragment } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import MainNavigation from "./components/MainNavigation";
import RootLayout from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

// function App() {
//   return (
//     <Fragment>
//       <MainNavigation/>
//       <Routes>
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path="/events" element={<EventsPage />}></Route>
//         <Route path="/events/:id" element={<EventDetailPage />}></Route>
//         <Route path="/events/new" element={<NewEventPage />}></Route>
//         <Route path="/events/:id/edit" element={<EditEventPage />}></Route>

//       </Routes>
//     </Fragment>
//   );
// }

export default App;
