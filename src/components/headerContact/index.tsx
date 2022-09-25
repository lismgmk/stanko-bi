import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import logoPic from '../../../public/images/logo.webp'
import { MobileMenu } from '../../elements/mobileMenu'
import { sxHideBlock, sxContainerHeight, sxHideAddressBlock } from '../../elements/mobileMenu/style'
import { SocialIconBox } from '../../elements/socialIconBox'
import { PS_BACKGROUND_PRIMARY_WHITE } from '../../theme'
import { HeaderButton } from './style'

export const HeaderContact: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_PRIMARY_WHITE}>
      <CustomContainer maxWidth={'xl'}>
        <Grid container spacing={1} sx={sxContainerHeight} alignItems={'center'} justifyContent={'space-between'}>
          <Grid item xl={3} lg={3} md={3}>
            <Image src={logoPic} alt="Picture of the author" width={201} height={62} />
          </Grid>
          <Grid sx={sxHideAddressBlock} xl={3} lg={3} md={3} item container flexDirection={'column'} alignItems={'end'}>
            <Typography variant={'contactsHeader'}>
              Пишите нам:
              <Typography variant={'contactsHeader'} sx={{ color: 'primary.dark' }}>
                &nbsp;domstroy-st@bk.ru
              </Typography>
            </Typography>
            <Typography variant={'contactsHeader'}>Моск.обл. г.Ступино ул.Промышленная </Typography>
            <Typography variant={'contactsHeader'}>Пн-Сб 9:00-18:00, Вс - выходной </Typography>
          </Grid>
          <Grid
            sx={sxHideBlock}
            xl={3}
            lg={3}
            md={3}
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Typography variant={'telNumberHeader'}>+7 (495) 142-07-25</Typography>
            <Typography variant={'telNumberHeader'}>+7 (495) 142-07-25</Typography>
          </Grid>
          <Grid sx={sxHideBlock} xl={3} lg={3} md={3} item container justifyContent={'center'}>
            <HeaderButton sx={{ mb: 1 }} variant="outlined">
              <Typography variant={'buttonHeader'}>Заказать звонок</Typography>
            </HeaderButton>
            <SocialIconBox />
          </Grid>
          <MobileMenu />
        </Grid>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
