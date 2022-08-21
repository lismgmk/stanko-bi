import { Grid } from '@mui/material'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { NextPage } from 'next'
import React from 'react'
import { ButtonElementsBox } from '../../elements/ButtonElementsBox'
import { PS_BACKGROUND_PRIMARY_GREY } from '../../theme'
import { ButtonSeeAll, CardsTitleH2, sxResponsiveContainerWeight } from './style'

export const CardsContainer: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_PRIMARY_GREY}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveContainerWeight}>
        <CardsTitleH2 variant={'h2'}>Предложения для вас</CardsTitleH2>
        <ButtonElementsBox />
        <Grid container justifyContent={'center'}>
          <ButtonSeeAll>СМОТРЕТЬ ВСЕ ПРОЕКТЫ</ButtonSeeAll>
        </Grid>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
