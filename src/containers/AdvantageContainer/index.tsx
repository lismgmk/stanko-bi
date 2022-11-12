import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import React from 'react'
import { AdvantagesBox } from '../../components/advantagesBox'
import { PS_BACKGROUND_SECONDARY_GREY_80 } from '../../theme'
import { CardsTitleH2, sxResponsiveContainerWeight } from './style'

export const AdvantagesContainer = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_SECONDARY_GREY_80}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveContainerWeight}>
        <CardsTitleH2 sx={{ mb: 4 }} variant={'h2'}>
          Наши преимущества
        </CardsTitleH2>
        <AdvantagesBox />
      </CustomContainer>
    </CustomWrapperBox>
  )
}
