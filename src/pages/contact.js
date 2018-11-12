import React from 'react'
import { Link } from 'gatsby'

import AppLayout from '../components/appLayout'

const ContactPage = () => (
  <AppLayout>
    <h1>Contact Us</h1>
    <p>Welcome to our contact page!</p>
    <Link to="/">Go back to the homepage</Link>
  </AppLayout>
)

export default ContactPage
