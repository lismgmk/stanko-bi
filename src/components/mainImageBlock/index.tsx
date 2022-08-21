import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Grid, Box, IconButton, SvgIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import bgMain from '../../../public/images/bgMain.webp'
import { mainImageBlock } from '../../staticData'
import {
  ImageBox,
  sxResponsiveContainerWeight,
  UnderBgBox,
  sxIconButton,
  TitleH1Typography,
  SubTitleH2Typography,
} from './style'

export const MainImageBlock: NextPage = () => {
  return (
    <CustomWrapperBox>
      <UnderBgBox />
      <ImageBox>
        <Image height={551} alt="Mountains" src={bgMain} layout="fill" objectFit="cover" quality={90} />
      </ImageBox>

      <CustomContainer maxWidth={'xl'} sx={sxResponsiveContainerWeight}>
        <Box sx={{ position: 'absolute', zIndex: 2 }}>
          <TitleH1Typography variant={'h1'}>{mainImageBlock.title}</TitleH1Typography>
          <SubTitleH2Typography variant={'body2'}>{mainImageBlock.subTitle}</SubTitleH2Typography>
          <Grid container alignItems={'center'}>
            <IconButton sx={sxIconButton}>
              <SvgIcon sx={{ color: 'primary.main' }} component={ArrowForwardIosIcon} />
            </IconButton>
            <Typography variant={'titleButton'}>РАССЧИТАТЬ СТОИМОСТЬ</Typography>
          </Grid>
        </Box>
        <Grid container sx={{ height: '100%' }} alignItems={'center'} justifyContent={'space-around'}></Grid>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
