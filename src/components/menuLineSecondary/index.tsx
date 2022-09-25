import { Grid } from '@mui/material'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import React from 'react'
import { menuLineSecondary } from '../../staticData'
import { PS_BACKGROUND_SECONDARY_BLUE } from '../../theme'
import { sxResponsiveContainerWeight, SecondaryLineButton, GridItem } from './style'

export const MenuLineSecondary: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_SECONDARY_BLUE}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveContainerWeight}>
        <Grid container sx={{ height: '100%' }} alignItems={'center'} justifyContent={'space-around'}>
          {menuLineSecondary.map((el) => {
            return (
              <GridItem xl={2.4} lg={2.4} md={2.4} key={nanoid()} item>
                <SecondaryLineButton>{el.name}</SecondaryLineButton>
              </GridItem>
            )
          })}
        </Grid>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
