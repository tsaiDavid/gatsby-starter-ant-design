import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About Us</h1>
    <p>Learn more about us here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
