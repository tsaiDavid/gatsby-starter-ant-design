import React from 'react'
import { Button, Divider } from 'antd'

import AppLayout from '../components/appLayout'
import Image from '../components/image'

const IndexPage = () => (
  <AppLayout>
    <Button type="primary">Ant Design Button</Button>
    <Divider />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </AppLayout>
)

export default IndexPage
