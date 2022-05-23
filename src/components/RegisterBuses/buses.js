import React from 'react'
import TopNavbar from '../Dashboard/TopNavbar';

export default function buses() {
  return (
    <TopNavbar goto={e=>window.location.assign('/dashboard/Buses/AddBus')}/>
  )
}
