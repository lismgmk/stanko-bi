import { Container, Grid } from '@mui/material'
import { CustomWrapperBox } from 'containers/headerContainer/style'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import React from 'react'
import { menuLinePrimary } from '../../staticData'
import { PS_BACKGROUND_PRIMARY_BLUE } from '../../theme'
import { sxResponsiveContainerWeight, PrimaryLineButton } from './style'

export const MenuLinePrimary: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_PRIMARY_BLUE}>
      <Container maxWidth={'xl'} disableGutters sx={sxResponsiveContainerWeight}>
        <Grid container sx={{ height: '100%' }} alignItems={'center'} justifyContent={'space-around'}>
          {menuLinePrimary.map((el) => {
            return (
              <Grid key={nanoid()} item>
                <PrimaryLineButton>{el.name}</PrimaryLineButton>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </CustomWrapperBox>
  )
}
