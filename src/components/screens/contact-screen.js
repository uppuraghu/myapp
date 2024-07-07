import React from 'react'
import Navbar from '../navbar/navbar';
import { Link, Outlet } from 'react-router-dom';

function ContactScreen() {
  return (
    <div>
        <Navbar/>
      <h2>wellcome to contact screen</h2>
      <Link to={"doctors"}>Doctors</Link>
      <Link to={"engineers"}>engineers</Link>
      <Outlet/>
    </div>
  )
}

export default ContactScreen;
