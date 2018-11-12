import React from 'react'
import { Link } from 'gatsby'

import AppLayout from '../components/appLayout'

const AboutPage = () => (
  <AppLayout>
    <h1>About Us</h1>
    <p>Learn more about us here.</p>
    <Link to="/">Go back to the homepage</Link>
  </AppLayout>
)

export default AboutPage
