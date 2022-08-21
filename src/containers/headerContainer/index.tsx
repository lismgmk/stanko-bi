import Box from '@mui/material/Box'
import type { NextPage } from 'next'
import * as React from 'react'
import { HeaderContact } from '../../components/headerContact'
import { MenuLinePrimary } from '../../components/menuLinePrimary'
import { MenuLineSecondary } from '../../components/menuLineSecondary'
import { sxDisplay } from './style'

const HeaderContainer: NextPage = () => {
  return (
    <Box>
      <HeaderContact />
      <Box sx={sxDisplay}>
        <MenuLinePrimary />
        <MenuLineSecondary />
      </Box>
    </Box>
  )
}

export default HeaderContainer
