import React from 'react'
import EventsList from './EventsList'

const EventsPage = () => {

  const events = [
    {id: 'e1', title:'fun run', date:'5-26-2023', img:'https://www.shutterstock.com/image-photo/babylon-ny-usa-26-june-260nw-668740138.jpg'},
    {id: 'e2', title:'bun run', date:'5-27-2023', img:'https://www.eatdrinkoc.com/wp-content/uploads/2014/01/wein3.jpg'},
    {id: 'e3', title:'rum run', date:'5-28-2023', img:'https://staticg.sportskeeda.com/editor/2022/05/adbc2-16531405861779-1920.jpg'}
  ]

  return (
    <>
    {EventsList({events})}
    </>
  )
}

export default EventsPage