import React from 'react'
import {useRouteLoaderData, json, redirect} from 'react-router-dom'
import EventItem from '../components/EventItem'
const EventDetailPage = () => {

  const data = useRouteLoaderData('event-detail')
  console.log(data)
  return (
    <EventItem event={data.event}/>
  )
}

export default EventDetailPage

export async function loader({request, params}){
  const id = params.eventId
  console.log(id)
  const response = await fetch(`http://localhost:8080/events/${id}`)
  console.log(response.body)
  if (!response.ok){
    throw json({message: 'Could not reterun a responsce dat data'},{ status: 500})
  }else{
    return response
  }
}

export async function action({request, params}){

  const response = await fetch(`http://localhost:8080/events/`+ params.eventId,{
    method: request.method
  });
  if (!response.ok){
    throw json({message: 'Could not delete'},{ status: 500})
  }

  return redirect('/events');

}