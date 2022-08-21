import { Grid } from '@mui/material'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import React from 'react'
import { menuLinePrimary } from '../../staticData'
import { PS_BACKGROUND_PRIMARY_BLUE } from '../../theme'
import { sxResponsiveContainerWeight, PrimaryLineButton } from './style'

export const MenuLinePrimary: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_PRIMARY_BLUE}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveContainerWeight}>
        <Grid container sx={{ height: '100%' }} alignItems={'center'} justifyContent={'space-around'}>
          {menuLinePrimary.map((el) => {
            return (
              <Grid key={nanoid()} item>
                <PrimaryLineButton>{el.name}</PrimaryLineButton>
              </Grid>
            )
          })}
        </Grid>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
