import { Container, Button, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import logoPic from '../../../public/images/logo.webp'
import { MobileMenu } from '../../elements/mobileMenu'
import { SocialIconBox } from '../../elements/socialIconBox'
import { PS_BACKGROUND_PRIMARY_WHITE } from '../../theme'
import { CustomWrapperBox, sxResponsiveContainerWeight } from './style'

export const HeaderContact: NextPage = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_PRIMARY_WHITE}>
      <Container maxWidth={'xl'} disableGutters sx={sxResponsiveContainerWeight}>
        <Grid container spacing={1} sx={{ height: 115 }} alignItems={'center'}>
          <Grid item xl={2} lg={2} md={2}>
            <Image src={logoPic} alt="Picture of the author" width={201} height={62} />
          </Grid>
          <Grid xl={4} lg={4} md={4} item container flexDirection={'column'} alignItems={'end'}>
            <Typography variant={'contactsHeader'}>
              Пишите нам:
              <Typography variant={'contactsHeader'} sx={{ color: 'primary.dark' }}>
                &nbsp;domstroy-st@bk.ru
              </Typography>
            </Typography>
            <Typography variant={'contactsHeader'}>Моск.обл. г.Ступино ул.Промышленная </Typography>
            <Typography variant={'contactsHeader'}>Пн-Сб 9:00-18:00, Вс - выходной </Typography>
          </Grid>
          <Grid xl={3} lg={3} md={3} item container justifyContent={'center'}>
            <Typography variant={'telNumberHeader'}>+7 (495) 142-07-25</Typography>
            <Typography variant={'telNumberHeader'}>+7 (495) 142-07-25</Typography>
          </Grid>
          <Grid xl={3} lg={3} md={3} item container justifyContent={'center'}>
            <Button variant="outlined">
              <Typography variant={'buttonHeader'}>Заказать звонок</Typography>
            </Button>
            <SocialIconBox />
          </Grid>
          <MobileMenu />
        </Grid>
      </Container>
    </CustomWrapperBox>
  )
}
