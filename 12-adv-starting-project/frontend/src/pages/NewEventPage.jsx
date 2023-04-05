import React from 'react'
import { json } from 'react-router-dom';
import EventForm from '../components/EventForm';

const NewEventPage = () => {
  return (
    <EventForm/>
  )
}

export default NewEventPage

export async function action({request, params}) {
  const data = request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }
  console.log('yay')
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(eventData)
  });

  if (!response.ok) {
    throw json({message: 'could not save event'},{ status: 500})
  }

  console.log(response)
}