import { Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { offerSlides } from '../../staticData'
import { PS_BACKGROUND_SECONDARY_GREY } from '../../theme'
import { ContainerGrid, CustomImage, sxIconOfferButton, sxResponsiveOfferContainerWeight } from './style'

export const SpecialOfferContainer = () => {
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_SECONDARY_GREY}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveOfferContainerWeight}>
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'fraction',
          }}
        >
          {offerSlides.map((elem) => {
            return (
              <SwiperSlide key={nanoid()}>
                <ContainerGrid container>
                  <CustomImage>
                    {/*<CustomImage xs={12} mobile={12} sm={6} md={6} lg={6} xl={6} item>*/}
                    <Image src={elem.pathImg} layout="fill" objectFit="cover" alt={'card_1'} />
                  </CustomImage>
                  <Grid sx={{ width: '50%' }} item container>
                    {/*<Grid item container xs={12} mobile={12} sm={6} md={6} lg={6} xl={6}>*/}
                    <Typography variant={'h3'}>{elem.title}</Typography>
                    <Typography sx={{ fontWeight: 700 }} variant={'h3'}>
                      {elem.titleBolt}
                    </Typography>
                    <Grid item>
                      <IconButton sx={sxIconOfferButton}>
                        <Typography variant={'telNumberHeader'}>Оставить заявку</Typography>
                      </IconButton>
                    </Grid>
                  </Grid>
                </ContainerGrid>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
