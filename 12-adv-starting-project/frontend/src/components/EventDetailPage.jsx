import React from 'react'
import {useParams} from 'react-router-dom'
const EventDetailPage = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>{params.id}</div>
  )
}

export default EventDetailPage