import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import * as React from 'react'
import { HeaderContact } from '../src/components/colorContainer'
import Copyright from '../src/Copyright'
import Link from '../src/Link'
import ProTip from '../src/ProTip'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <HeaderContact />
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography gutterBottom>hello world!!!</Typography>
        <Link href="/about" color="primary.main">
          Go to the about page!!!
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default Home
